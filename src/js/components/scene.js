import GUI from 'lil-gui'
import { Renderer, Program, Mesh, Triangle } from 'ogl'
import vertex from './../glsl/main.vert'
import fragment from './../glsl/main.frag'
import LoaderManager from './../managers/LoaderManager'
import { getCoverUV } from './../utils/ogl'
import gsap from 'gsap'

const controls = {
  fadeCenterX: {
    default: 0.5,
    min: 0,
    max: 1,
  },
  fadeCenterY: {
    default: 0.5,
    min: 0,
    max: 1,
  },
  fadeFrom: {
    default: 0.075,
    min: 0,
    max: 1,
  },
  fadeTo: {
    default: 0.75,
    min: 0,
    max: 1,
  },
  displacementCoef: {
    default: 0.5,
    min: -5,
    max: 5,
  },
  constantDisplacementCoef: {
    default: 0.5,
    min: -5,
    max: 5,
  },
  speed: {
    default: 0.3,
    min: 0,
    max: 1,
  },
  horMinValue: {
    default: 0.25,
    min: -4,
    max: 4,
  },
  horMaxValue: {
    default: 0.75,
    min: -4,
    max: 4,
  },
  vertMinValue: {
    default: 0.25,
    min: -4,
    max: 4,
  },
  vertMaxValue: {
    default: 0.75,
    min: -4,
    max: 4,
  },
}

/**
 * Represents a Scene object.
 * @class
 * @constructor
 * @param {Object} opts - The options for the Scene object.
 * @param {string} opts.el - The selector for the element that the scene will be attached to.
 * @param {boolean} [opts.GUI=false] - Whether to enable the GUI for the scene.
 * @param {string} opts.image - The URL of the image to be displayed in the scene.
 * @param {string} opts.displacement - The URL of the displacement map for the scene.
 */
class Scene {
  renderer
  mesh
  program
  el
  canvasEl

  guiObj = {
    fadeFrom: 0.075,
    fadeTo: 0.75,
    fadeCenterX: 0.5,
    fadeCenterY: 0.5,
    displacementCoef: 0.5,
    constantDisplacementCoef: 0.5,
    speed: 0.3,
    horMinValue: 0.25,
    horMaxValue: 0.75,
    vertMinValue: 0.25,
    vertMaxValue: 0.75,
  }

  horMinValue = 0.25
  horMaxValue = 0.75
  vertMinValue = 0.25
  vertMaxValue = 0.75

  mousePosition = {
    x: 0.5,
    y: 0.5,
  }

  constructor(opts = { el: '.scene', GUI: false, uniforms: {} }) {
    this.el = document.querySelector(opts.el)
    this.canvasEl = this.el.getElementsByTagName('canvas')[0]

    this.uid = Math.random().toString(36).substr(2, 9)
    this.imageUrl = opts.image
    this.displacementUrl = opts.displacement
    this.GUI = opts.GUI
    this.uniformOptions = opts.uniforms || {}

    this.horMinValue = opts.sensitivity?.horMinValue || -1
    this.horMaxValue = opts.sensitivity?.horMaxValue || 1
    this.vertMinValue = opts.sensitivity?.vertMinValue || -1
    this.vertMaxValue = opts.sensitivity?.vertMaxValue || 1

    this.setGUI()
    this.setScene()

    this.initImageUploader()

    setTimeout(() => {
      this.events()
    })
  }

  /**
   * Initializes the image uploader.
   */
  initImageUploader() {
    let self = this

    let imageUpload = this.el.getElementsByTagName('input')[0]

    /**
     * Event listener for when the file input is changed.
     * @param {Event} event - The event object.
     */
    imageUpload.addEventListener('change', function (event) {
      let file = event.target.files[0]

      /**
       * Creates a new FileReader object.
       */
      let reader = new FileReader()

      /**
       * Event listener for when the file is loaded.
       * @param {Event} event - The event object.
       */
      reader.addEventListener('load', function (event) {
        let img = new Image()
        img.src = event.target.result

        /**
         * Event listener for when the image is loaded.
         */
        img.addEventListener('load', function () {
          let canvas = document.createElement('canvas')
          let ctx = canvas.getContext('2d')
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)

          /**
           * Creates a data URL from the image.
           */
          let dataURL = canvas.toDataURL('image/png')

          /**
           * Creates a new image object.
           */
          let image = new Image()
          image.src = dataURL

          /**
           * Event listener for when the image is loaded.
           */
          image.addEventListener('load', function () {
            /**
             * Sets the new displacement URL.
             */
            self.displacementUrl = dataURL

            /**
             * Sets the new scene.
             */
            self.setScene()
          })
        })
      })

      /**
       * Reads the file as a data URL.
       */
      reader.readAsDataURL(file)
    })
  }

  /**
   * sets up the gui for the scene
   */
  setGUI() {
    if (!this.GUI) return

    const gui = new GUI({ container: this.el })

    // add effect switcher
    gui.add({ effect: this.uniformOptions.uEffect }, 'effect', ['Effect1', 'Effect2']).onChange((val) => {
      this.program.uniforms.uEffect1.value = val == 'Effect1'
    })

    const sensitivityFolder = gui.addFolder('Mouse sensitivity')

    // loop through the controls object and add the controls to the gui
    for (const key in controls) {
      const control = controls[key]
      /**
       * adds a control to the gui
       * @param {object} this.guiObj - the object containing the gui values
       * @param {string} key - the name of the control
       * @param {number} control.min - the minimum value of the control
       * @param {number} control.max - the maximum value of the control
       * @param {function} gui.add - the function used to add the control
       * @param {function} gui.onChange - the function called when the control is changed
       */

      const uniform = `u${key.charAt(0).toUpperCase() + key.slice(1)}`

      if (typeof this.uniformOptions[uniform] !== 'undefined') {
        this.guiObj[key] = this.uniformOptions[uniform]

        gui.add(this.guiObj, key, control.min, control.max).onChange((val) => {
          this.program.uniforms[uniform].value = val
        })
      } else {
        this.guiObj[key] = this[key]
        sensitivityFolder.add(this.guiObj, key, control.min, control.max).onChange((val) => {
          this[key] = val
        })
      }
    }
  }

  destroyScene() {
    // Remove event listeners
    this.el.removeEventListener('mousemove', this.onMouseMove, false)
    this.el.removeEventListener('mouseleave', this.onLeave, false)
    window.removeEventListener('resize', this.handleResize, false)

    // Remove ticker from animation loop
    gsap.ticker.remove(this.handleRAF)

    // Dispose of WebGL resources
    if (this.program) {
      this.program.destroy()
      this.program = null
    }
    if (this.mesh) {
      this.mesh.geometry.dispose()
      this.mesh = null
    }
    if (this.renderer) {
      this.renderer.dispose()
      this.renderer = null
    }
  }

  /**
   * Sets up the WebGL scene using OGL.
   */
  async setScene() {
    // this.destroyScene()

    if (!this.canvasEl) {
      console.warn('No canvas element found in the container. Make sure to add a canvas element to the container!')
      return
    }

    // Initialize the renderer
    this.renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas: this.canvasEl,
    })
    const gl = this.renderer.gl
    gl.clearColor(1, 1, 1, 1)

    // Adjust scene size based on viewport
    this.handleResize()

    // Create a basic triangle geometry for the mesh
    const geometry = new Triangle(gl)

    const imageID = `image_${this.uid}`
    const displacementID = `displacement_${this.uid}`

    // loads the assets into the loader manager
    await LoaderManager.load(
      [
        {
          name: imageID,
          texture: this.imageUrl,
        },
        {
          name: displacementID,
          texture: this.displacementUrl,
        },
      ],
      gl
    ).then(() => {
      console.log('assets loaded:', LoaderManager.assets)
    })

    const uvCover = getCoverUV(gl, LoaderManager.assets[imageID].image)
    const uvDisplacementCover = getCoverUV(gl, LoaderManager.assets[displacementID].image)

    // Initialize the shader program with uniforms
    this.program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        /**
         * defines the uniforms for the program
         * @param {WebGLRenderingContext} gl - the webgl context
         */
        uTime: {
          value: this.uniformOptions.uTime || 0,
        },
        uSpeed: {
          value: this.uniformOptions.uSpeed || 0.3,
        },

        uFadeCenterX: {
          value: this.uniformOptions.uFadeCenterX || 0.5,
        },
        uFadeCenterY: {
          value: this.uniformOptions.uFadeCenterY || 0.5,
        },

        uFadeFrom: {
          value: this.uniformOptions.uFadeFrom || 0,
        },
        uFadeTo: {
          value: this.uniformOptions.uFadeTo || 1,
        },

        uDisplacementCoef: {
          value: this.uniformOptions.uDisplacementCoef || 0.1,
        },

        uConstantDisplacementCoef: {
          value: this.uniformOptions.uConstantDisplacementCoef || 0.1,
        },

        uOffsetX: {
          value: this.uniformOptions.uOffsetX || 0,
        },
        uOffsetY: {
          value: this.uniformOptions.uOffsetY || 0,
        },

        uTexture: {
          value: LoaderManager.assets[imageID],
        },
        uvRepeat: {
          value: uvCover.repeat,
        },
        uvOffset: {
          value: uvCover.offset,
        },

        uDisplacementTexture: {
          value: LoaderManager.assets[displacementID],
        },
        uvDisplacementRepeat: {
          value: uvDisplacementCover.repeat,
        },
        uvDisplacementOffset: {
          value: uvDisplacementCover.offset,
        },

        uEffect1: {
          value: this.uniformOptions.uEffect == 'Effect1',
        },
      },
    })

    // Create the mesh with the geometry and shader program
    this.mesh = new Mesh(gl, {
      geometry,
      program: this.program,
    })
  }

  /**
   * Normalizes a value between a minimum and maximum range
   * @param {number} normalizedValue - the value to be normalized, between 0 and 1
   * @param {number} minValue - the minimum value of the range
   * @param {number} maxValue - the maximum value of the range
   * @returns {number} the normalized value, between minValue and maxValue
   */
  adjustRange(normalizedValue, minValue, maxValue) {
    const rangeSize = maxValue - minValue
    return normalizedValue * rangeSize + minValue
  }

  /**
   * Adds event listeners for mouse movement and resizing
   */
  events() {
    /**
     * Adds an event listener for window resize events
     * @param {Event} event - the event object
     */
    window.addEventListener('resize', this.handleResize, false)

    /**
     * Adds event listeners for mouse movement and resizing
     * @param {MouseEvent} event - the mouse event object
     */
    this.canvasEl.addEventListener('mousemove', this.onMouseMove, false)
    this.canvasEl.addEventListener('mouseleave', this.onLeave, false)

    /**
     * Adds a ticker to the animation loop
     * @param {number} t - the current time
     */
    gsap.ticker.add(this.handleRAF)
  }

  /**
   * removes event listeners and destroys the scene
   */
  destroy() {
    /**
     * removes an event listener for a specific event type
     * @param {EventTarget} target - the target element or node
     * @param {string} type - the event type, e.g. 'click'
     * @param {EventListenerOptions|boolean} options - the options for the event listener, or whether to use a capture phase
     * @param {EventListener} listener - the event listener function
     * @returns {void}
     */
    this.el.removeEventListener('mousemove', this.onMouseMove, false)
    this.el.removeEventListener('mouseleave', this.onLeave, false)
    /**
     * removes an event listener for a specific event type
     * @param {string} type - the event type, e.g. 'resize'
     * @param {EventListener} listener - the event listener function
     * @param {boolean} options - whether to use capture phase
     * @returns {void}
     */
    window.removeEventListener('resize', this.handleResize, false)
    /**
     * removes a ticker from the animation loop
     * @param {GSAPTimeline} timeline - the timeline to remove
     * @returns {void}
     */
    gsap.ticker.remove(this.handleRAF)
  }

  /**
   * Handles the mouse move event.
   * @param {MouseEvent} event - The mouse move event.
   */
  onMouseMove = (event) => {
    if (!this.program) {
      console.warn('No program on move', this)
      return
    }

    const x = event.clientX - this.el.offsetLeft
    const y = event.clientY - this.el.offsetTop

    // normalize value to 0-1
    const normalizedX = x / this.el.offsetWidth
    const normalizedY = y / this.el.offsetHeight

    // Adjust the range of x and y from 0-1 to minValue-maxValue
    const adjustedX = this.adjustRange(normalizedX, this.horMinValue, this.horMaxValue)
    const adjustedY = this.adjustRange(normalizedY, this.vertMinValue, this.vertMaxValue)

    // animate the uniforms based on the adjusted mouse position
    gsap.to(this.mousePosition, {
      x: adjustedX,
      y: adjustedY,
      duration: 2,
      ease: 'Power4.easeOut',
      overwrite: true,
      onUpdate: () => {
        this.program.uniforms.uOffsetX.value = this.mousePosition.x
        this.program.uniforms.uOffsetY.value = this.mousePosition.y
      },
    })
  }

  /**
   * Handles the "leave" event for the scene.
   */
  onLeave = () => {
    if (!this.program) {
      console.warn('No program on leave:', this)
      return
    }

    gsap.to(this.mousePosition, {
      x: this.program.uniforms.uEffect1.value ? 0 : 0.5,
      y: this.program.uniforms.uEffect1.value ? 0 : 0.5,
      duration: 2,
      ease: 'Power4.easeOut',
      overwrite: true,
      onUpdate: () => {
        this.program.uniforms.uOffsetX.value = this.mousePosition.x
        this.program.uniforms.uOffsetY.value = this.mousePosition.y
      },
    })
  }

  /**
   * Handles the resize event of the scene.
   */
  handleResize = () => {
    this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight)
  }

  /**
   * Handles the requestAnimationFrame callback.
   * @param {number} t - The current timestamp.
   */
  handleRAF = (t) => {
    if (!this.program) {
      return
    }

    this.program.uniforms.uTime.value = t * 1

    // Don't need a camera if camera uniforms aren't required
    this.renderer.render({ scene: this.mesh })
  }
}

export default Scene
