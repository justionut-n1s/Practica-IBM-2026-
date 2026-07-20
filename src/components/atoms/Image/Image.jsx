import './Image.css'

// Afiseaza o poza. Props: src, alt, width, height, rounded (true/false pentru colturi rotunjite)

function Image({ src, alt, width, height, rounded }) {
  
  let clasaCSS = 'img'

  if (rounded === true) {
    clasaCSS = 'img img--rounded'
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clasaCSS}
    />
  )
}

export default Image