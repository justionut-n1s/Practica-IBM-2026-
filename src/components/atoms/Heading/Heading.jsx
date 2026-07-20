import './Heading.css'

// Titlu de sectiune. Props: lvl = nivelul (1-4, ex: <Heading lvl={2}>Welcome to Nest</Heading>)

function Heading({ lvl, children }) {
  const Tag = `h${lvl}`
  
  return <Tag className={`h${lvl}`}>{children}</Tag>
}

export default Heading