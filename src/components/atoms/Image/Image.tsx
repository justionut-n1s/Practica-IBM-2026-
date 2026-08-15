import "./Image.css";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  rounded?: boolean;
  className?: string;
}

function Image({
  src,
  alt,
  width,
  height,
  rounded = false,
  className = "",
}: ImageProps) {
  const clasaCSS = rounded ? "img img--rounded" : "img";

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${clasaCSS} ${className}`.trim()}
    />
  );
}

export default Image;
