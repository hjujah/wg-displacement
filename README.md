# Quickly generate 2D shaders in the browser

This repository will help you create custom 2D shaders quickly using the [OGL](https://github.com/oframe/ogl) library, a small, yet effective WebGL library. It leverages the power of [Vite](https://vitejs.dev/guide/why.html) ⚡️ for fast compilation of your assets. Additionally, it includes [Sass](https://sass-lang.com/guide) for advanced CSS scripting, [Babel](https://babeljs.io/) for JavaScript transpilation, [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality and formatting, [lil-gui](https://www.npmjs.com/package/lil-gui) for a lightweight graphical user interface, and [GSAP](https://greensock.com/docs/) for smooth animations.

## Usage

To use this module, simply create a new `Scene` instance with your desired configuration. Here's an example of how to initialize a scene with a custom image and displacement effect, including a GUI for real-time adjustments:

```javascript
new Scene({
  el: '.scene__1',
  image: './img/face3.png',
  displacement: './img/ai3.png',
  GUI: true,
})
```

## Configuration Options

- **`el`**: A string selector that matches the DOM element where the scene will be rendered.
- **`image`**: The path to the main image file you want to apply the shader effect to.
- **`displacement`**: The path to the displacement image that will drive the shader effect.
- **`GUI`**: A boolean to enable or disable the lil-gui interface for real-time effect tweaking.
