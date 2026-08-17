import { Heading, Text, Image, Button, Input } from "../../atoms/index";
import { Form } from "../../molecules/index";
import { shopper } from "../../../assets/images";
import "./Newsletter.css";

interface NewsletterBannerProps {
  title: string;
  subtitle: string;
}

function NewsletterBanner({ title, subtitle }: NewsletterBannerProps) {
  return (
    <div className="newsletter-banner">
      <div className="newsletter-banner__content">
        <Heading lvl={2}>{title}</Heading>

        <Text variant="footer-text" type="p">
          {subtitle}
        </Text>

        {/* <div className="newsletter-banner__form">
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
        </div> */}
        <Form
          inputClassName="text-input text-input--email-input"
          placeholder="Your email address"
          buttonText="Subscribe"
        ></Form>
      </div>

      <div className="newsletter-banner__image">
        <Image src={shopper} alt="Shopper" width={400} height={300} />
      </div>
    </div>
  );
}

export default NewsletterBanner;
