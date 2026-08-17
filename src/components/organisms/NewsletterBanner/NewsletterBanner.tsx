import { Heading, Text, Image } from "../../atoms/index";
import { Form } from "../../molecules/index";
import { shopper } from "../../../assets/images";
import { translations } from "../../../translations/translations";
import "./NewsletterBanner.css";

interface NewsletterBannerProps {
  title: string;
  subtitle: string;
}

function NewsletterBanner({ title, subtitle }: NewsletterBannerProps) {
  const translation = translations.en.newsletterBanner;
  return (
    <div className="newsletter-banner">
      <div className="newsletter-banner__content">
        <Heading lvl={2}>{title}</Heading>

        <Text variant="footer-text" type="p">
          {subtitle}
        </Text>

        <Form
          inputClassName="text-input text-input--email-input"
          placeholder={translation.placeholder}
          buttonText={translation.buttonText}
        ></Form>
      </div>

      <div className="newsletter-banner__image">
        <Image src={shopper} alt="Shopper" width={400} height={300} />
      </div>
    </div>
  );
}

export default NewsletterBanner;
