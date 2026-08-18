import { DropdownList, ProductRow } from "../../molecules";
import { Chip, Heading, Image } from "../../atoms";
import "./BlogSidebar.css";

interface TrendingPost {
  imageSrc: string;
  name: string;
  name_link: string;
  rating: number;
  price: string;
}

interface BlogSidebarProps {
  categories: string[];
  trendingPosts: TrendingPost[];
  galleryImages: string[];
  tags: string[];
}

// Reuses ProductRow for "trending" (it already renders image + title + a link),
// even though it also shows a price/rating row that a blog post doesn't need.
// Fine as a placeholder until there's a dedicated post-row component.
function BlogSidebar({ categories, trendingPosts, galleryImages, tags }: BlogSidebarProps) {
  return (
    <div className="blog-sidebar">
      <div>
        <Heading lvl={4}>Category</Heading>
        <DropdownList contentList={categories} />
      </div>

      <div>
        <Heading lvl={4}>Trending Now</Heading>
        <div className="blog-sidebar__trending">
          {trendingPosts.map((post) => (
            <ProductRow key={post.name} {...post} />
          ))}
        </div>
      </div>

      <div>
        <Heading lvl={4}>Gallery</Heading>
        <div className="blog-sidebar__gallery">
          {galleryImages.map((src, i) => (
            <Image key={i} src={src} alt="Gallery" width={60} height={60} rounded />
          ))}
        </div>
      </div>

      <div>
        <Heading lvl={4}>Popular Tags</Heading>
        <div className="blog-sidebar__tags">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
