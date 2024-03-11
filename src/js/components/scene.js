import GUI from 'lil-gui'
import { Renderer, Program, Mesh, Triangle } from 'ogl'
import vertex from '@/js/glsl/main.vert'
import fragment from '@/js/glsl/main.frag'
import LoaderManager from '@/js/managers/LoaderManager'
import { getCoverUV } from '@/js/utils/ogl'
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
    min: 0,
    max: 1,
  },
  speed: {
    default: 0.3,
    min: 0,
    max: 1,
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
  guiObj = {
    fadeFrom: 0.075,
    fadeTo: 0.75,
    fadeCenterX: 0.5,
    fadeCenterY: 0.5,
    displacementCoef: 0.5,
    speed: 0.3,
  }

  mousePosition = {
    x: 0,
    y: 0,
  }

  constructor(opts = { el: '.scene', GUI: false }) {
    this.el = document.querySelector(opts.el)
    this.uid = Math.random().toString(36).substr(2, 9)
    this.imageUrl = opts.image
    this.displacementUrl = opts.displacement
    this.GUI = opts.GUI

    this.setGUI()
    this.setScene()

    setTimeout(() => {
      this.events()
    })
  }

  /**
   * sets up the gui for the scene
   */
  setGUI() {
    if (!this.GUI) return

    const gui = new GUI({ container: this.el })

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
      gui.add(this.guiObj, key, control.min, control.max).onChange((val) => {
        this.program.uniforms[`u${key.charAt(0).toUpperCase() + key.slice(1)}`].value = val
      })
    }
  }

  /**
   * Sets up the WebGL scene using OGL.
   */
  async setScene() {
    const canvasEl = this.el.getElementsByTagName('canvas')[0]

    if (!canvasEl) {
      console.warn('No canvas element found in the container. Make sure to add a canvas element to the container!')
      return
    }

    // Initialize the renderer
    this.renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas: canvasEl,
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
          value: 0,
        },
        uSpeed: {
          value: 0.3,
        },

        uFadeCenterX: {
          value: 0.5,
        },
        uFadeCenterY: {
          value: 0.5,
        },

        uFadeFrom: {
          value: 0.075,
        },
        uFadeTo: {
          value: 0.75,
        },

        uDisplacementCoef: {
          value: 0.5,
        },

        uOffsetX: {
          value: 0,
        },
        uOffsetY: {
          value: 0,
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
    this.el.addEventListener('mousemove', this.onMouseMove, false)
    this.el.addEventListener('mouseleave', this.onLeave, false)

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
    const minValue = -4
    const maxValue = 4
    const adjustedX = this.adjustRange(normalizedX, minValue, maxValue)
    const adjustedY = this.adjustRange(normalizedY, minValue, maxValue)

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
      x: 0,
      y: 0,
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
