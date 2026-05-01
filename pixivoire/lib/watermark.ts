import sharp from 'sharp'

// Applique un watermark "© PIXIVOIRE" en bas à droite de l'image
export async function applyWatermark(imageBuffer: Buffer): Promise<Buffer> {
  const image = sharp(imageBuffer)
  const metadata = await image.metadata()
  const width = metadata.width || 800
  const height = metadata.height || 600

  const fontSize = Math.max(16, Math.floor(width * 0.03))
  const padding = Math.floor(fontSize * 0.8)

  const watermarkSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" flood-color="rgba(0,0,0,0.5)"/>
        </filter>
      </defs>
      <text
        x="${width - padding}"
        y="${height - padding}"
        font-family="Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="bold"
        fill="rgba(255,255,255,0.65)"
        text-anchor="end"
        filter="url(#shadow)"
        letter-spacing="1"
      >© PIXIVOIRE</text>
    </svg>
  `

  return image
    .composite([{ input: Buffer.from(watermarkSvg), top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toBuffer()
}

// Génère un thumbnail 300x300 (centré/crop)
export async function generateThumbnail(imageBuffer: Buffer): Promise<Buffer> {
  return sharp(imageBuffer)
    .resize(300, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 80 })
    .toBuffer()
}
