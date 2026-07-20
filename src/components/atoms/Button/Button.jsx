import './Button.css'

// Buton verde. Props: children = textul de pe buton (ex: <Button>Subscribe</Button>)
function Button({ children }) {
  return <button className="btn">{children}</button>
}

export default Button