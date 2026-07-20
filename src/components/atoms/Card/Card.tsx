import './Card.css'

type CardVariant = 'shadow' | 'flat'

export interface CardProps {
  children: React.ReactNode
  variant?: CardVariant
  className?: string
}

function Card({ children, variant = 'shadow', className = '' }: CardProps) {
  return <div className={`crd crd--${variant} ${className}`.trim()}>{children}</div>
}

export default Card