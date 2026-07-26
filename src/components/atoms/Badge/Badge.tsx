import './Badge.css'

// Eticheta -  Props: text, variant ('pink'|'blue'|'green'|'orange')

type BadgeVariant = 'pink' | 'green'| 'blue' | 'orange'

interface BadgeProps {
    text: string
    variant?: BadgeVariant
}

function Badge({ text, variant }: BadgeProps) {
    return <span className={`badge badge--${variant}`}>{text}</span>
}

export default Badge