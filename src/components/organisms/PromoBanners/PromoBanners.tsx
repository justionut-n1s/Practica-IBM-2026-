import { Text, Button } from "../../atoms/index";
import { promo1, promo2, promo3 } from "../../../assets/images/index";
import "./PromoBanners.css";

interface Banner {
  imageSrc: string;
  title: string;
  buttonHref: string;
}

interface PromoBannersProps {
  banners: Banner[];
}

function PromoBanners({ banners }: PromoBannersProps) {
  return (
    <div className="promo-banners">
      {banners.map((banner) => (
        <div
          key={banner.title}
          className="promo-banners__item"
          style={{ backgroundImage: `url(${banner.imageSrc})` }}
        >
          <Text variant="banner-text">{banner.title}</Text>
          <a href={banner.buttonHref}>
            <Button
              variant="shop-now-button"
              className="button button--shop-now-button"
              onClick={() => {}}
            >
              Shop Now
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
}

export { promo1, promo2, promo3 };
export default PromoBanners;
