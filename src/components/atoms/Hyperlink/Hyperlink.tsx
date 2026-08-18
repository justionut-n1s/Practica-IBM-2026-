import "./Hyperlink.css";

export interface HyperlinkProps {
  message: string;
  link: string;
  variant?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function Hyperlink({ message, link, variant = "", onClick }: HyperlinkProps) {
  const isExternal = link.startsWith("http");

  return (
    <a
      className={`hyp ${variant}`.trim()}
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {message}
    </a>
  );
}

export default Hyperlink;