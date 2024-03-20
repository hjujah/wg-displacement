import Scene from '@/js/components/scene'
// import Scene from 'wg-displacement'
;(() => {
  // scene
  new Scene({
    el: '.scene__1',
    image: './img/face3.png',
    displacement: './img/map4.png',
    GUI: true,

    sensitivity: {
      horMinValue: 0.25,
      horMaxValue: 0.75,
      vertMinValue: 0.25,
      vertMaxValue: 0.75,
    },

    uniforms: {
      uEffect: 'Effect2',
      uSpeed: 0.03,
      uFadeCenterX: 1,
      uFadeCenterY: 1,
      uFadeFrom: 0.879,
      uFadeTo: 0.252,
      uDisplacementCoef: 2.2,
      uOffsetX: 0.5,
      uOffsetY: 0.5,
      uConstantDisplacementCoef: 0,
      uConstantEffectVisible: 0,
    },
  })

  new Scene({
    el: '.scene__2',
    image: './img/face3.png',
    displacement: './img/map0.png',
    GUI: true,

    sensitivity: {
      horMinValue: -2,
      horMaxValue: 2,
      vertMinValue: -2,
      vertMaxValue: 2,
    },

    uniforms: {
      uEffect: 'Effect1',
      uSpeed: 0.03,
      uFadeCenterX: 0.5,
      uFadeCenterY: 0.5,
      uFadeFrom: 0.075,
      uFadeTo: 0.55,
      uDisplacementCoef: 0.67,
      uOffsetX: 0.0,
      uOffsetY: 0.0,
      uConstantDisplacementCoef: 0.9,
      uConstantEffectVisible: 0.5,
    },
  })

  new Scene({
    el: '.scene__3',
    image: './img/face3.png',
    displacement: './img/z1.jpg',
    GUI: true,

    sensitivity: {
      horMinValue: 0.25,
      horMaxValue: 0.75,
      vertMinValue: 0.25,
      vertMaxValue: 0.75,
    },

    uniforms: {
      uEffect: 'Effect2',
      uSpeed: 0.03,
      uFadeCenterX: 0.57,
      uFadeCenterY: 0.41,
      uFadeFrom: 1,
      uFadeTo: 0.398,
      uDisplacementCoef: 2.2,
      uOffsetX: 0.5,
      uOffsetY: 0.5,
      uConstantDisplacementCoef: 0,
      uConstantEffectVisible: 0,
    },
  })

  new Scene({
    el: '.scene__4',
    image: './img/face3.png',
    displacement: './img/z1.jpg',
    GUI: true,

    sensitivity: {
      horMinValue: 0.25,
      horMaxValue: 0.75,
      vertMinValue: 0.25,
      vertMaxValue: 0.75,
    },

    uniforms: {
      uEffect: 'Effect1',
      uSpeed: 0.05,
      uFadeCenterX: 0.631,
      uFadeCenterY: 0.201,
      uFadeFrom: 0.435,
      uFadeTo: 0.312,
      uDisplacementCoef: -0.16,
      uOffsetX: 0.01,
      uOffsetY: 0.01,
      uConstantDisplacementCoef: 0.46,
      uConstantEffectVisible: 0.28,
    },
  })

  new Scene({
    el: '.scene__5',
    image: './img/face3.png',
    displacement: './img/z2.jpg',
    GUI: true,

    sensitivity: {
      horMinValue: 0.25,
      horMaxValue: 0.75,
      vertMinValue: 0.25,
      vertMaxValue: 0.75,
    },

    uniforms: {
      uEffect: 'Effect2',
      uSpeed: 0.05,
      uFadeCenterX: 1,
      uFadeCenterY: 1,
      uFadeFrom: 0.828,
      uFadeTo: 0.252,
      uDisplacementCoef: 1.56,
      uOffsetX: 0.5,
      uOffsetY: 0.5,
      uConstantDisplacementCoef: 0,
      uConstantEffectVisible: 0,
    },
  })

  new Scene({
    el: '.scene__6',
    image: './img/face3.png',
    displacement: './img/z3.jpg',
    GUI: true,

    sensitivity: {
      horMinValue: 1.808,
      horMaxValue: 0.75,
      vertMinValue: -1,
      vertMaxValue: 0.75,
    },

    uniforms: {
      uEffect: 'Effect2',
      uSpeed: 0.03,
      uFadeCenterX: 1,
      uFadeCenterY: 0.631,
      uFadeFrom: 1,
      uFadeTo: 0.01,
      uDisplacementCoef: -5,
      uOffsetX: 0.5,
      uOffsetY: 0.5,
      uConstantDisplacementCoef: -1.22,
      uConstantEffectVisible: 0.474,
    },
  })
})()
