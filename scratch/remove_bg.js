const { Jimp } = require('jimp');

async function removeBackground() {
  const image = await Jimp.read('public/assets/logo_raw.png');
  
  // Convert white-ish pixels to transparent
  // We check for pixels close to white (255, 255, 255)
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // Threshold for "white"
    if (red > 240 && green > 240 && blue > 240) {
      this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
    }
  });

  await image.write('public/assets/logo_final.png');
  console.log('Background removed and saved to logo_final.png');
}

removeBackground().catch(console.error);
