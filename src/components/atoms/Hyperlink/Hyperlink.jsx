import './Hyperlink.css'

// Folosit pentru text ce redirectioneaza utulizatorul spre alta pagina (HOME , ABOUT SHOP). Props:  message = textul propriu zis , link = calea unde utilizatorul este redirectionat (ex: <Hyperlink message="TEST" link="https://placehold.co/"/>)
function Hyperlink({ message , link }) {
  return <a className="hyp" href={link}>{message} </a>
}

export default Hyperlink