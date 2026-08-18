import {
  SiteHeader,
  Footer,
  NewsletterBanner,
  LocationMap,
  ContactForm,
} from "../components/organisms/index";
import { Breadcrumb } from "../components/molecules";
import { Heading, Button } from "../components/atoms";
import { Page } from "../types";
import {
  footerAboutList,
  footerColumns,
  helpTopics,
  offices,
} from "../mocks/index";
import { translations } from "../translations/translations";
import "./Contact.css";

interface ContactProps {
  onNavigate: (page: Page) => void;
}

function Contact({ onNavigate }: ContactProps) {
  const footerTranslate = translations.en.footer;
  const newsletterTranslate = translations.en.newsletterBanner;
  const contactTextTranslate = translations.en.contactPage;
  const contactFormTranslate = translations.en.contactForm;
  const breadcrumbTranslate = translations.en.breadcrumb;
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb
        trail={[
          { label: breadcrumbTranslate.pages, link: "#" },
          { label: breadcrumbTranslate.contact },
        ]}
      />
      <div className="contact-page" style={{ marginTop: "2.5rem" }}>
        <div className="contact-section contact-intro">
          <div className="contact-intro__main">
            <span className="contact-intro__eyebrow">
              {contactTextTranslate.howWeCanHelp}
            </span>
            <Heading lvl={2}>{contactTextTranslate.title}</Heading>
            <p>{contactTextTranslate.description}</p>
          </div>
          <div className="contact-intro__grid">
            {helpTopics.map((topic) => (
              <div key={topic.title} className="contact-intro__grid-item">
                <Heading lvl={4}>{topic.title}</Heading>
                <p>{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-section">
          <LocationMap embedUrl="https://maps.google.com/maps?q=205+North+Michigan+Avenue,+Chicago,+IL+60601&z=1&output=embed" />
        </div>
        <div className="contact-section contact-offices">
          {offices.map((office) => (
            <div key={office.title} className="contact-office">
              <Heading lvl={3} className="contact-office__title">
                {office.title}
              </Heading>
              {office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <Button variant="filter-button">
                {contactTextTranslate.viewMapButtonText}
              </Button>
            </div>
          ))}
        </div>
        <div className="contact-section">
          <ContactForm
            title={contactFormTranslate.title}
            onSubmit={(data) => console.log(data)}
          />
        </div>
        <div className="contact-section">
          <NewsletterBanner
            title={newsletterTranslate.title}
            subtitle={newsletterTranslate.subtitle}
          />
        </div>
        <Footer
          columns={footerColumns}
          aboutContent={footerAboutList}
          supportContacts={[
            { number: "1900 - 6666", label: "Working 8:00 - 22:00" },
            { number: "1900 - 8888", label: "24/7 Support Center" },
          ]}
          copyrightText={footerTranslate.copyrightText}
        />
      </div>
    </div>
  );
}

export default Contact;
