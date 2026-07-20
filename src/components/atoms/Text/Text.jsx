import './Text.css'

// Text general gri. Props: message = textul propiu zis (ex: Text message="TEST"/>)

function Text({ children }) {
  return <p className="text">{children}</p>
}

export default Text