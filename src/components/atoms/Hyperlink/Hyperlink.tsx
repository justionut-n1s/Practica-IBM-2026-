import "./Hyperlink.css";

export interface HyperlinkProps {
  message: string;
  link: string;
  variant?: string;
}

function Hyperlink({ message, link, variant = "" }: HyperlinkProps) {
  const isExternal = link.startsWith("http");

  return (
    <a
      className={`hyp ${variant}`.trim()}
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {message}
    </a>
  );
}

export default Hyperlink;
