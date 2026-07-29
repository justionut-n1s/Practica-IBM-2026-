import "./Avatar.css";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

function Avatar({ src, alt, size = 40 }: AvatarProps) {
  return (
    <img src={src} alt={alt} width={size} height={size} className="avatar" />
  );
}

export default Avatar;
