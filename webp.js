const imagemin = require('imagemin'),
  webp = require('imagemin-webp')
const outputFolder = 'dist/assets/img/webp'
const produceWebP = async () => {
  await imagemin(['public/assets/img/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  // console.log('PNGs processed')
  await imagemin(['public/assets/img/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  // console.log('JPGs and JPEGs processed')
}
produceWebP()
