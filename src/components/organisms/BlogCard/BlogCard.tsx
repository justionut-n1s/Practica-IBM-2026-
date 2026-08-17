import { Card, Image, Heading, Hyperlink } from "../../atoms";
import "./BlogCard.css";

interface BlogCardProps {
  imageSrc: string;
  category: string;
  title: string;
  titleLink: string;
  date: string;
}

function BlogCard({ imageSrc, category, title, titleLink, date }: BlogCardProps) {
  return (
    <Card className="blog-card">
      <Image src={imageSrc} alt={title} width={280} height={180} rounded />
      <span className="blog-card__category">{category}</span>
      <Heading lvl={4}>
        <Hyperlink message={title} link={titleLink} />
      </Heading>
      <p className="blog-card__date">{date}</p>
    </Card>
  );
}

export default BlogCard;
