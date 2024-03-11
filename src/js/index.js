// Test import of a JavaScript module
import Scene from '@/js/components/scene'
// import Scene from 'wg-displacement'
;(() => {
  console.log('SENE1', Scene)

  // scene
  new Scene({
    el: '.scene__1',
    image: './img/face3.png',
    displacement: './img/ai3.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__2',
    image: './img/face4.jpg',
    displacement: './img/map10.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__3',
    image: './img/face3.png',
    displacement: './img/map3.png',
    GUI: true,
  })

  new Scene({
    el: '.scene__4',
    image: './img/face4.jpg',
    displacement: './img/map4.png',
    GUI: true,
  })
})()
