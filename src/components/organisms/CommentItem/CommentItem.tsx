import { Avatar, Heading, Hyperlink } from "../../atoms";
import "./CommentItem.css";

interface CommentItemProps {
  avatarSrc: string;
  name: string;
  date: string;
  message: string;
}

function CommentItem({ avatarSrc, name, date, message }: CommentItemProps) {
  return (
    <div className="comment-item">
      <Avatar src={avatarSrc} alt={name} size={48} />
      <div className="comment-item__content">
        <Heading lvl={4}>{name}</Heading>
        <span className="comment-item__date">{date}</span>
        <p>{message}</p>
        <Hyperlink message="Reply" link="#" />
      </div>
    </div>
  );
}

export default CommentItem;
