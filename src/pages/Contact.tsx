import { SiteHeader, Footer, NewsletterBanner } from "../components/organisms";
import ContactForm from "../components/organisms/ContactForm/ContactForm";
import LocationMap from "../components/organisms/LocationMap/LocationMap";
import { Breadcrumb } from "../components/molecules";
import { Heading, Button } from "../components/atoms";
import { Page } from "../types";
import "./Contact.css";

import { Location, Headset, Mail, Hours } from "../assets/icons";

const footerAboutContent = [
  {
    id: 1,
    iconSrc: Location,
    alt: "Address",
    text: "Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  },
  {
    id: 2,
    iconSrc: Headset,
    alt: "Phone",
    text: "Call Us: (+91)-540-025-124553",
  },
  { id: 3, iconSrc: Mail, alt: "Email", text: "Email: sale@Nest.com" },
  {
    id: 4,
    iconSrc: Hours,
    alt: "Hours",
    text: "Hours: 10:00 - 18:00, Mon - Sat",
  },
];

const helpTopics = [
  {
    title: "01. Visit Feedback",
    text: "Tell us how your last order or in-store visit went so we can keep improving.",
  },
  {
    title: "02. Employer Services",
    text: "Looking to partner with Nest or list your farm/store? We'd love to talk.",
  },
  {
    title: "03. Billing Inquiries",
    text: "Questions about a charge, refund or invoice go straight to our billing team.",
  },
  {
    title: "04. General Inquiries",
    text: "Anything else on your mind — we usually reply within one business day.",
  },
];

const offices = [
  {
    title: "Office",
    lines: [
      "205 North Michigan Avenue, Suite 810",
      "Chicago, 60601, USA",
      "Phone: (123) 456-7890",
      "Email: contact@nest.com",
    ],
  },
  {
    title: "Studio",
    lines: [
      "205 North Michigan Avenue, Suite 810",
      "Chicago, 60601, USA",
      "Phone: (123) 456-7890",
      "Email: contact@nest.com",
    ],
  },
  {
    title: "Shop",
    lines: [
      "205 North Michigan Avenue, Suite 810",
      "Chicago, 60601, USA",
      "Phone: (123) 456-7890",
      "Email: contact@nest.com",
    ],
  },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Delivery Information", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Support Center", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In", href: "#" },
      { label: "View Cart", href: "#" },
      { label: "My Wishlist", href: "#" },
      { label: "Track My Order", href: "#" },
      { label: "Help Ticket", href: "#" },
      { label: "Shipping Details", href: "#" },
      { label: "Compare products", href: "#" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Become a Vendor", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Farm Business", href: "#" },
      { label: "Farm Careers", href: "#" },
      { label: "Our Suppliers", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Promotions", href: "#" },
    ],
  },
  {
    title: "Popular",
    links: [
      { label: "Milk & Flavoured Milk", href: "#" },
      { label: "Butter and Margarine", href: "#" },
      { label: "Eggs Substitutes", href: "#" },
      { label: "Marmalades", href: "#" },
      { label: "Sour Cream and Dips", href: "#" },
      { label: "Tea & Kombucha", href: "#" },
      { label: "Cheese", href: "#" },
    ],
  },
];

interface ContactProps {
  onNavigate: (page: Page) => void;
}

function Contact({ onNavigate }: ContactProps) {
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb
        trail={[{ label: "Pages", link: "#" }, { label: "Contact" }]}
      />

      <div className="contact-page" style={{ marginTop: "2.5rem" }}>
        <div className="contact-section contact-intro">
          <div className="contact-intro__main">
            <span className="contact-intro__eyebrow">How can we help you?</span>
            <Heading lvl={2}>Let us know how we can help you</Heading>
            <p>We're here to help and answer any question you might have.</p>
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
              <Button variant="filter-button">View map</Button>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <ContactForm
            title="Drop Us a Line"
            onSubmit={(data) => console.log(data)}
          />
        </div>

        <div className="contact-section">
          <NewsletterBanner
            title="Stay home & get your daily needs from our shop"
            subtitle="Start Your Daily Shopping with Nest Mart"
          />
        </div>

        <Footer
          columns={footerColumns}
          aboutContent={footerAboutContent}
          supportContacts={[
            { number: "1900 - 6666", label: "Working 8:00 - 22:00" },
            { number: "1900 - 8888", label: "24/7 Support Center" },
          ]}
          copyrightText="© 2022, Nest - HTML Ecommerce Template. All rights reserved"
        />
      </div>
    </div>
  );
}

export default Contact;
