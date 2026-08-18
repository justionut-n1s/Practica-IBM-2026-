import { SiteHeader, Footer, NewsletterBanner } from "../components/organisms";
import StatsCounter from "../components/organisms/StatsCounter/StatsCounter";
import { Breadcrumb, TeamMemberCard } from "../components/molecules";
import { Heading, Image, Hyperlink, Button } from "../components/atoms";
import { Page } from "../types";
import "./About.css";

import {
  aboutMain,
  aboutYourParthener,
  swirl,
  aboutCake,
  aboutSteak,
  aboutAvocado,
  happyClientsBackground,
} from "../assets/images";
import { translations } from "../translations/translations";
import {
  footerAboutList,
  footerColumns,
  partnerColumns,
  team,
  stats,
  whatWeProvide,
} from "../mocks/index";

interface AboutProps {
  onNavigate: (page: Page) => void;
}

function About({ onNavigate }: AboutProps) {
  const aboutTranslate = translations.en.aboutPage;
  const footerTranslate = translations.en.footer;
  const newsletterTranslate = translations.en.newsletterBanner;
  const breadcrumbTranslate = translations.en.breadcrumb;
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb
        trail={[
          { label: breadcrumbTranslate.pages, link: "#" },
          { label: breadcrumbTranslate.about },
        ]}
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
            <Heading lvl={2}>{aboutTranslate.welcome}</Heading>
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
            {aboutTranslate.whatWeProvide}
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
                <Hyperlink message={aboutTranslate.readMore} link="#" />
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
              <span className="about-partner__eyebrow">
                {aboutTranslate.ourPerf}
              </span>
              <Heading lvl={2}>{aboutTranslate.yourPartner}</Heading>
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
                <Hyperlink message={aboutTranslate.readMore} link="#" />
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
            <span className="about-team__eyebrow">
              {aboutTranslate.ourTeam}
            </span>
            <Heading lvl={2}>{aboutTranslate.meetTeam}</Heading>
            <p>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus. Proin ullamcorper pretium orci. Donec
              necscele risque leo. Nam massa dolor imperdiet neccon sequata
              congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <Button variant="filter-button">{aboutTranslate.seeMembers}</Button>
          </div>
          <div className="about-team__cards">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
        <div className="about-section">
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

export default About;
