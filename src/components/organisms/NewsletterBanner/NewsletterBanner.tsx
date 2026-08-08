import { Heading, Text, Image, Button, Input } from "../../atoms";
import { shopper } from "../../../assets/images";
import "./NewsletterBanner.css";

interface NewsletterBannerProps {
  title: string;
  subtitle: string;
}

// Newsletter signup banner with heading, email input, subscribe button and side image
function NewsletterBanner({ title, subtitle }: NewsletterBannerProps) {
  return (
    <div className="newsletter-banner">
      <div className="newsletter-banner__content">
        <Heading lvl={2}>{title}</Heading>

        <Text variant="footer-text" type="p">
          {subtitle}
        </Text>

        <div className="newsletter-banner__form">
          <Input
            type="text"
            variant="email-input"
            placeholder="Your email address"
            className="text-input text-input--email-input"
          />

          <Button
            variant="subscribe-button"
            className="button button--subscribe-button"
            onClick={() => {}}
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className="newsletter-banner__image">
        <Image src={shopper} alt="Shopper" width={400} height={300} />
      </div>
    </div>
  );
}

export default NewsletterBanner;
