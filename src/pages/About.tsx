import { SiteHeader, Footer, NewsletterBanner } from "../components/organisms";
import StatsCounter from "../components/organisms/StatsCounter/StatsCounter";
import { Breadcrumb, TeamMemberCard } from "../components/molecules";
import { Heading, Image, Hyperlink, Button } from "../components/atoms";
import { Page } from "../types";
import "./About.css";

import {
  featureAssortment,
  featureDelivery,
  featurePrices,
  featureReturns,
  featureDeal,
  aboutMain,
  aboutYourParthener,
  dilanSpecter,
  hMerinda,
  swirl,
  aboutCake,
  aboutSteak,
  aboutAvocado,
  happyClientsBackground,
} from "../assets/images";
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

const whatWeProvide = [
  {
    icon: featurePrices,
    title: "Best Prices & Offers",
    text: "Everyday low prices and seasonal deals on the groceries you buy most.",
  },
  {
    icon: featureAssortment,
    title: "Wide Assortment",
    text: "Thousands of products across fresh food, pantry staples and household goods.",
  },
  {
    icon: featureDelivery,
    title: "Free Delivery",
    text: "Free next-day delivery on every order over $50, no membership required.",
  },
  {
    icon: featureReturns,
    title: "Easy Returns",
    text: "Not happy with an item? Return it within 30 days for a full refund.",
  },
  {
    icon: featureDeal,
    title: "100% Satisfaction",
    text: "Quality-checked products and a support team that actually answers.",
  },
  {
    icon: featurePrices,
    title: "Great Daily Deal",
    text: "New discounts every day when you sign up for our newsletter.",
  },
];

const partnerColumns = [
  {
    title: "Who we are",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our history",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "Our mission",
    text: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
  },
];

const stats = [
  { value: "15+", label: "Glorious years" },
  { value: "20K+", label: "Happy clients" },
  { value: "18+", label: "Projects complete" },
  { value: "12+", label: "Team advisor" },
  { value: "50K+", label: "Products sale" },
];

const team = [
  {
    imageSrc: hMerinda,
    name: "H. Merinda",
    role: "CEO & Co-Founder",
    socialLinks: [],
  },
  {
    imageSrc: dilanSpecter,
    name: "Dilan Specter",
    role: "Head Engineer",
    socialLinks: [],
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

interface AboutProps {
  onNavigate: (page: Page) => void;
}

function About({ onNavigate }: AboutProps) {
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb
        trail={[{ label: "Pages", link: "#" }, { label: "About Us" }]}
      />

      <div className="about-page" style={{ marginTop: "2.5rem" }}>
        <div className="about-section about-hero">
          <Image
            src={aboutMain}
            alt="Welcome to Nest"
            rounded
            className="about-hero__image"
          />
          <div className="about-hero__content">
            <Heading lvl={2}>Welcome to Nest</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre. Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
            <div className="about-hero__thumbs">
              {[aboutCake, aboutSteak, aboutAvocado].map((thumb, i) => (
                <Image
                  key={i}
                  src={thumb}
                  alt="Nest gallery"
                  rounded
                  className="about-hero__thumb"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="about-section">
          <Heading lvl={2} className="about-provide__heading">
            What We Provide?
          </Heading>
          <Image src={swirl} alt="" className="about-provide__swirl" />
          <div className="about-provide__grid">
            {whatWeProvide.map((feature) => (
              <div key={feature.title} className="feature-card">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={56}
                  height={56}
                />
                <Heading lvl={4} className="feature-card__title">
                  {feature.title}
                </Heading>
                <p className="feature-card__text">{feature.text}</p>
                <Hyperlink message="Read more" link="#" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <div className="about-partner">
            <Image
              src={aboutYourParthener}
              alt="Our partnership"
              rounded
              className="about-partner__collage-img"
            />
            <div className="about-partner__content">
              <span className="about-partner__eyebrow">Our performance</span>
              <Heading lvl={2}>
                Your Partner for e-commerce grocery solution
              </Heading>
              <p>
                Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto.
              </p>
              <p>
                Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia.
              </p>
            </div>
          </div>

          <div className="about-partner__columns">
            {partnerColumns.map((column) => (
              <div key={column.title} className="about-partner__column">
                <Heading lvl={4}>{column.title}</Heading>
                <p>{column.text}</p>
                <Hyperlink message="Read more" link="#" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <StatsCounter
            stats={stats}
            backgroundImage={happyClientsBackground}
          />
        </div>

        <div className="about-section about-team">
          <div className="about-team__content">
            <span className="about-team__eyebrow">Our Team</span>
            <Heading lvl={2}>Meet Our Expert Team</Heading>
            <p>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus. Proin ullamcorper pretium orci. Donec
              necscele risque leo. Nam massa dolor imperdiet neccon sequata
              congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <Button variant="filter-button">See All Members</Button>
          </div>

          <div className="about-team__cards">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>

        <div className="about-section">
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

export default About;
