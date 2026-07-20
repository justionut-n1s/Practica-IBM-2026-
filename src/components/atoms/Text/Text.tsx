import './Text.css'
type TextVariant = 'default' | 'label' | 'light'
type TextSize = 'sm' | 'md' | 'lg'

// Text general gri. Props: children = textul propriu zis (ex: <Text>TEST</Text>)

export interface TextProps {
  children: React.ReactNode
  variant?: TextVariant
  size?: TextSize
  className?: string
}

function Text({ children, variant = 'default', size = 'md', className = '' }: TextProps) {
  const classes = `text text--${variant} text--${size} ${className}`.trim()
  return <p className={classes}>{children}</p>
}

export default Text