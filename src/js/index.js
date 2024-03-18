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
    },
  })
})()
