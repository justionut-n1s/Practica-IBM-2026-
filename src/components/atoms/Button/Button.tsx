import './Button.css'

// Buton verde. Props: children = textul de pe buton (ex: <Button>Subscribe</Button>)

type ButtonVariant = 'solid' | 'outline'

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

function Button({ children, variant = 'solid', type = 'button', className = '', onClick }: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim()
  return <button type={type} className={classes} onClick={onClick}>{children}</button>
}

export default Button