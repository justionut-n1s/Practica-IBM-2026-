import { Heading, Text, Image, Button } from "../../atoms";
import { Input } from "../../atoms";
import "./NewsletterBanner.css";

interface NewsletterBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  onSubscribe?: (email: string) => void;
}

// Newsletter signup banner: heading, text, email input + button, side image
function NewsletterBanner({
  title,
  subtitle,
  imageSrc,
  onSubscribe,
}: NewsletterBannerProps) {
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
          <Button variant="subscribe-button" onClick={() => onSubscribe?.("")}>
            Subscribe
          </Button>
        </div>
      </div>

      <div className="newsletter-banner__image">
        <Image src={imageSrc} alt="Fresh vegetables" width={300} height={250} />
      </div>
    </div>
  );
}

export default NewsletterBanner;
