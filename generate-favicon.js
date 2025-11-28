const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputSvg = path.join(__dirname, 'public', 'logo.svg');
const outputDir = path.join(__dirname, 'public');

// Размеры для фавиконов
const sizes = [16, 32, 48, 96, 192, 512];

async function generateFavicons() {
  try {
    // Читаем SVG
    const svgBuffer = fs.readFileSync(inputSvg);
    
    // Генерируем PNG разных размеров
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `favicon-${size}x${size}.png`);
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Создан favicon-${size}x${size}.png`);
    }
    
    // Создаем favicon.ico (обычно 16x16 и 32x32)
    const favicon16 = await sharp(svgBuffer)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Для .ico файла используем 32x32 (большинство браузеров поддерживают)
    await sharp(favicon32)
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✓ Создан favicon.ico');
    console.log('\n✅ Все фавиконы успешно созданы!');
    
  } catch (error) {
    console.error('Ошибка при создании фавиконов:', error);
    process.exit(1);
  }
}

generateFavicons();


