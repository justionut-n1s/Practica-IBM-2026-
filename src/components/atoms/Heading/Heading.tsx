import './Heading.css'

// Titlu de sectiune. Props: lvl = nivelul (1-4, ex: <Heading lvl={2}>Welcome to Nest</Heading>)
export interface HeadingProps {
  lvl: 1 | 2 | 3 | 4
  children: React.ReactNode
  light?: boolean
  className?: string
}

function Heading({ lvl, children, light = false, className = '' }: HeadingProps) {
  const classes = `h${lvl} ${light ? 'h--light' : ''} ${className}`.trim()

  if (lvl === 1) return <h1 className={classes}>{children}</h1>
  if (lvl === 2) return <h2 className={classes}>{children}</h2>
  if (lvl === 3) return <h3 className={classes}>{children}</h3>
  return <h4 className={classes}>{children}</h4>
}

export default Heading