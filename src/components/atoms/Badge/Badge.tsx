import "./Badge.css";

// Small colored label. Props: text, variant ('pink'|'blue'|'green'|'orange')

type BadgeVariant = "pink" | "green" | "blue" | "orange";

export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

function Badge({ text, variant = "green" }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{text}</span>;
}

export default Badge;
