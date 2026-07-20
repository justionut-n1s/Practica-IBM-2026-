import './Icon.css'

// Afiseaza o iconita mica. Props: src, alt, size (latime = inaltime, ex: size={40})

function Icon({ src, alt,size}) {

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="ico"
    />
  )
}

export default Icon