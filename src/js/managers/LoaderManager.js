import { Texture } from 'ogl'

class LoaderManager {
  assets = {} // Dictionary of assets, can be different type, gltf, texture, img, font, feel free to make a Enum if using TypeScript

  get(name) {
    return this.assets[name]
  }

  load = (data, gl) =>
    new Promise((resolve) => {
      const promises = []
      for (let i = 0; i < data.length; i++) {
        const { name, texture } = data[i]

        if (texture) {
          if (this.isBase64Image(texture)) {
            promises.push(this.loadTextureFromBase64(texture, name, gl))
          } else {
            promises.push(this.loadTexture(texture, name, gl))
          }
        }
      }

      Promise.all(promises).then(() => resolve())
    })

  loadTexture(url, name, gl) {
    console.log('now load the texture:', url)

    if (!this.assets[name]) {
      this.assets[name] = {}
    }

    return new Promise((resolve) => {
      const image = new Image()
      const texture = new Texture(gl)

      image.onload = () => {
        texture.image = image
        this.assets[name] = texture

        resolve(texture)
      }

      image.src = url
    })
  }

  loadTextureFromBase64(base64Data, name, gl) {
    console.log('now load the base64Data:', base64Data)

    if (!this.assets[name]) {
      this.assets[name] = {}
    }

    return new Promise((resolve) => {
      const image = new Image()
      const texture = new Texture(gl)

      image.onload = () => {
        texture.image = image
        this.assets[name] = texture

        console.log('IMAGE IS LOADED!!!', texture)

        resolve(texture)
      }

      image.src = base64Data
    })

    // let self = this
    // console.log('now load the base 64 texture:', base64Data)

    // const img = new Image()
    // const texture = new Texture(gl)

    // img.onload = function () {
    //   texture.image = img
    //   self.assets[name] = texture

    //   console.log('IMAGE IS LOADED!!!', img)
    // }
    // img.src = base64Data

    // return new Promise((resolve, reject) => {
    //   const image = new Image()

    //   image.onload = () => {
    //     const canvas = document.createElement('canvas')
    //     const context = canvas.getContext('2d')
    //     canvas.width = image.width
    //     canvas.height = image.height
    //     context.drawImage(image, 0, 0)

    //     console.log('LOADED')

    //     canvas.toBlob((blob) => {
    //       const blobURL = URL.createObjectURL(blob)
    //       const texture = new Texture(gl) // , { generateMipmaps: false }

    //       texture.image = blobURL
    //       texture.needsUpdate = true // Set needsUpdate to true to trigger texture update

    //       this.assets[name] = texture

    //       resolve(texture)
    //     }, 'image/png')
    //   }

    //   image.onerror = (error) => {
    //     reject(error)
    //   }

    //   image.src = base64Data
    // })
  }

  isBase64Image(data) {
    // Regular expression pattern to match base64 encoded data
    const base64Pattern = /^(data:image\/[a-zA-Z]+;base64,)/

    // Check if the data starts with the base64 pattern
    return base64Pattern.test(data)
  }
}

export default new LoaderManager()
