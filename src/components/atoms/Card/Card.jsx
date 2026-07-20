import './Card.css'

// Container alb cu umbra, folosit ca baza pentru feature cards si team cards. Props: children = orice pui in interior
function Card({ children }) {
  return <div className="crd">{children}</div>
}

export default Card