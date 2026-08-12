import { Heading } from "../../atoms";
import Button from "../../atoms/button/Button";
import { promo1, promo2, promo3 } from "../../../assets/images";
import "./PromoBanners.css";

interface Banner {
  imageSrc: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

interface PromoBannersProps {
  banners: Banner[];
}

// Row of small promotional banners (image + title + button)
function PromoBanners({ banners }: PromoBannersProps) {
  return (
    <div className="promo-banners">
      {banners.map((banner) => (
        <div
          key={banner.title}
          className="promo-banners__item"
          style={{ backgroundImage: `url(${banner.imageSrc})` }}
        >
          <Heading lvl={3}>{banner.title}</Heading>
          <a href={banner.buttonHref}>
            <Button
              variant="shop-now-button"
              className="button button--shop-now-button"
              onClick={() => {}}
            >
              {banner.buttonLabel}
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
}

export { promo1, promo2, promo3 };
export default PromoBanners;
