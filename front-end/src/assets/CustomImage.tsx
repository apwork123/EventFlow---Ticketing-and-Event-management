import React from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  layout?: 'fill' | 'fixed' | 'responsive'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  className?: string
}

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  layout = 'responsive',
  objectFit = 'cover',
  className = '',
}) => {
  const imgStyle: React.CSSProperties = {
    objectFit,
  }

  if (layout === 'fill') {
    imgStyle.position = 'absolute'
    imgStyle.top = 0
    imgStyle.left = 0
    imgStyle.width = '100%'
    imgStyle.height = '100%'
  }

  return (
    <div
      style={{
        position: layout === 'fill' ? 'relative' : 'static',
        width: layout === 'fill' ? '100%' : width,
        height: layout === 'fill' ? '100%' : height,
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        width={layout !== 'fill' ? width : undefined}
        height={layout !== 'fill' ? height : undefined}
        style={imgStyle}
        className={className}
      />
    </div>
  )
}

export default CustomImage