import { Card, Icon, Heading, Hyperlink } from "../../atoms";
import "./CategoryList.css";

interface CategoryItem {
  icon: string;
  label: string;
  count: number;
  link?: string;
}

interface CategoryListProps {
  title: string;
  items: CategoryItem[];
}

function CategoryList({ title, items }: CategoryListProps) {
  return (
    <Card className="category-list">
      <Heading lvl={3}>{title}</Heading>

      <ul className="category-list__items">
        {items.map((item) => (
          <li key={item.label} className="category-list__item">
            <Icon src={item.icon} alt={item.label} size={24} />
            <Hyperlink message={item.label} link={item.link ?? "#"} />
            <span className="category-list__count">{item.count}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default CategoryList;
