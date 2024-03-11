# Generate displacement effect

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

# Integrating `wg-displacement` into Framer

### Step 1: Install the Package

First, you need to add `wg-displacement` to your Framer project. Open your project's directory in the terminal, and run:

```bash
npm install wg-displacement
```

This command adds the `wg-displacement` package to your project, making the `Scene` module available for use.

### Step 2: Create a New Code Component

Framer allows you to create custom code components that you can use alongside the visual design tools. To create a new code component:

1. Open your Framer project.
2. Navigate to the "Code" tab on the left sidebar.
3. Click the "+" button to create a new code file. Name it appropriately (e.g., `CustomScene.tsx` for a TypeScript project or `CustomScene.jsx` for JavaScript).

### Step 3: Use the Scene Module in Your Component

In the code component file you just created, import the `Scene` module from the `wg-displacement` package and set it up according to your needs. Below is a sample implementation:

```jsx
import * as React from 'react'
import Scene from 'wg-displacement'

export default class CustomScene extends React.Component {
  componentDidMount() {
    // Assuming you have a div in your Framer project with the class 'scene__1'
    // You might need to adjust the selector based on your actual setup
    new Scene({
      el: '.scene__1',
      image: './path/to/your/image.png', // Adjust the path to your image
      displacement: './path/to/your/displacement/image.png', // Adjust the path to your displacement image
      GUI: false,
    })
  }

  render() {
    // Render a container for your scene. Adjust the className as needed.
    return (
      <div className="scene__1">
        <canvas></canvas>
      </div>
    )
  }
}
```

### Step 4: Add Your Component to the Canvas

Drag your new code component from the "Code" tab onto the Framer canvas. Adjust its size and position as needed.

### Configuration Options

Remember, the `Scene` module accepts several options for customization:

- **`el`**: A string selector that matches the DOM element where the scene will be rendered.
- **`image`**: The path to the main image file you want to apply the shader effect to.
- **`displacement`**: The path to the displacement image that will drive the shader effect.
- **`GUI`**: A boolean to enable or disable the lil-gui interface for real-time effect tweaking.

### Notes

- Ensure the images and other assets used by the `Scene` component are accessible within your Framer project's public directory or hosted online.
- Adjust the paths to your images and displacement maps according to where they are stored.

By following these steps, you can seamlessly integrate custom WebGL shaders created with the `wg-displacement` module into your Framer prototypes, enhancing your designs with dynamic, interactive elements.
