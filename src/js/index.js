import Scene from '@/js/components/scene'
// import Scene from 'wg-displacement'
;(() => {
  // scene
  new Scene({
    el: '.scene__1',
    image: './img/face3.png',
    displacement: './img/ai3.png',
    GUI: true,

    uniforms: {
      uSpeed: 0.1,
      uFadeCenterX: 0.5,
      uFadeCenterY: 0.521,
      uFadeFrom: 0.075,
      uFadeTo: 0.127,
      uDisplacementCoef: 0.017,
      uOffsetX: 0,
      uOffsetY: 0,
    },
  })

  new Scene({
    el: '.scene__2',
    image: './img/face3.png',
    displacement: './img/map10.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__3',
    image: './img/face3.png',
    displacement: './img/map0.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__4',
    image: './img/face3.png',
    displacement: './img/map4.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__5',
    image: './img/face3.png',
    displacement: './img/map22.png',
    GUI: true,
  })
})()
