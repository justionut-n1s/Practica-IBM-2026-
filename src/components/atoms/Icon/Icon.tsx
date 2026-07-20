import './Icon.css'

// Afiseaza o iconita mica. Props: src, alt, size (latime = inaltime, ex: size={40})
export interface IconProps {
  src: string
  alt: string
  size: number
  className?: string
}

function Icon({ src, alt, size, className = '' }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`ico ${className}`.trim()}
    />
  )
}

export default Icon