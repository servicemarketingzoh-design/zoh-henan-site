'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

export function QRCodeDisplay({ url, size = 200 }: { url: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, url, { width: size, margin: 2,
      color: { dark: '#1A1A1A', light: '#FFFFFF' } }).catch(() => setErreur(true))
  }, [url, size])

  if (erreur) return <p className="text-sm" style={{ color: 'var(--text-muted)' }}>QR Code indisponible</p>
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <canvas ref={canvasRef} className="rounded-lg" />
      <p className="text-xs text-center max-w-[200px] break-all" style={{ color: 'var(--text-muted)' }}>{url}</p>
    </div>
  )
}
