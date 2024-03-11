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

  setGUI() {
    if (!this.GUI) return

    const gui = new GUI({ container: this.el })

    // loop trough the controls object and add the controls to the gui
    for (const key in controls) {
      const control = controls[key]
      gui.add(this.guiObj, key, control.min, control.max).onChange((val) => {
        this.program.uniforms[`u${key.charAt(0).toUpperCase() + key.slice(1)}`].value = val
      })
    }
  }

  async setScene() {
    const canvasEl = this.el.querySelector('.scene__container__canvas')

    this.renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), canvas: canvasEl })
    const gl = this.renderer.gl
    gl.clearColor(1, 1, 1, 1)

    this.handleResize()

    const geometry = new Triangle(gl)

    const imageID = `image_${this.uid}`
    const displacementID = `displacement_${this.uid}`

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

    this.program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0.3 },

        uFadeCenterX: { value: 0.5 },
        uFadeCenterY: { value: 0.5 },

        uFadeFrom: { value: 0.075 },
        uFadeTo: { value: 0.75 },

        uDisplacementCoef: { value: 0.5 },

        uOffsetX: { value: 0 },
        uOffsetY: { value: 0 },

        uTexture: { value: LoaderManager.assets[imageID] },
        uvRepeat: { value: uvCover.repeat },
        uvOffset: { value: uvCover.offset },

        uDisplacementTexture: { value: LoaderManager.assets[displacementID] },
        uvDisplacementRepeat: { value: uvDisplacementCover.repeat },
        uvDisplacementOffset: { value: uvDisplacementCover.offset },
      },
    })

    this.mesh = new Mesh(gl, { geometry, program: this.program })
  }

  // The function to adjust the normalized value to the new range
  adjustRange(normalizedValue, minValue, maxValue) {
    const rangeSize = maxValue - minValue
    return normalizedValue * rangeSize + minValue
  }

  events() {
    window.addEventListener('resize', this.handleResize, false)

    // Add the mouse event listeners to the element
    this.el.addEventListener('mousemove', this.onMouseMove, false)
    this.el.addEventListener('mouseleave', this.onLeave, false)

    gsap.ticker.add(this.handleRAF)
  }

  destroy() {
    this.el.removeEventListener('mousemove', this.onMouseMove, false)
    this.el.removeEventListener('mouseleave', this.onLeave, false)
    window.removeEventListener('resize', this.handleResize, false)
    gsap.ticker.remove(this.handleRAF)
  }

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

  handleResize = () => {
    this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight)
  }

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
