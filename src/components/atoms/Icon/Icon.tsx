import "./Icon.css";

export interface IconProps {
  src: string;
  alt: string;
  size: number | undefined;
  className?: string;
}

function Icon({ src, alt, size, className = "" }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`icon ${className}`.trim()}
    />
  );
}

export default Icon;
