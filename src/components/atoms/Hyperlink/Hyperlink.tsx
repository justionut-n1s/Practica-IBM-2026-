import './Hyperlink.css'

// Folosit pentru text ce redirectioneaza utilizatorul spre alta pagina (HOME, ABOUT, SHOP).
export interface HyperlinkProps {
  message: string
  link: string
  className?: string
}

function Hyperlink({ message, link, className = '' }: HyperlinkProps) {
  const isExternal = link.startsWith('http')

  return (
    <a
      className={`hyp ${className}`.trim()}
      href={link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {message}
    </a>
  )
}

export default Hyperlink