import { Heading, Text, Image, Hyperlink, Icon, Logo } from "../../atoms/index";
import { CallCenterContainer } from "../../molecules/index";
import { googlePlay, appStore, payment } from "../../../assets/images";
import { Phone } from "../../../assets/icons/index";
import "./Footer.css";

interface FooterAboutColumn {
  id: number;
  iconSrc: string;
  alt: string;
  text: string;
}
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnData {
  title: string;
  links: FooterLink[];
}

interface SupportContact {
  number: string;
  label: string;
}

interface FooterProps {
  aboutContent: FooterAboutColumn[];
  columns: FooterColumnData[];
  supportContacts: SupportContact[];
  copyrightText: string;
}

function FooterColumnLocal({ title, links }: FooterColumnData) {
  return (
    <div className="footer__column">
      <Heading lvl={4}>{title}</Heading>

      <ul className="footer__column-list">
        {links.map((link) => (
          <li key={link.label}>
            <Hyperlink
              variant="hyp--footer"
              message={link.label}
              link={link.href}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({
  aboutContent,
  columns,
  supportContacts,
  copyrightText,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <Logo logoHeight={50} logoWidth={163}></Logo>
          <ul className="footer__contact">
            {aboutContent.map(({ id, iconSrc, alt, text }) => (
              <li key={id}>
                <Icon
                  className="icon--green"
                  src={iconSrc}
                  alt={alt}
                  size={16}
                />
                <Text variant="footer-text" type="span">
                  {text}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column) => (
          <FooterColumnLocal
            key={column.title}
            title={column.title}
            links={column.links}
          />
        ))}

        <div className="footer__install">
          <Heading lvl={4}>Install App</Heading>

          <Text variant="footer-text" type="p">
            From App Store or Google Play
          </Text>

          <div className="footer__app-buttons">
            <Image src={googlePlay} alt="Google Play" width={90} height={30} />

            <Image src={appStore} alt="App Store" width={90} height={30} />
          </div>

          <Text variant="footer-text" type="p">
            Secured Payment Gateways
          </Text>

          <Image src={payment} alt="Payment methods" width={140} height={25} />
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <Text variant="footer-text text--footer-text--copyright-text">
          {copyrightText}
        </Text>

        <div className="footer__support">
          {supportContacts.map((contact) => (
            <CallCenterContainer
              iconSrc={Phone}
              primaryTextContent={contact.number}
              secondaryTextContent={contact.label}
            ></CallCenterContainer>
          ))}
        </div>

        <div className="footer__socials">
          <div className="footer__socials-row">
            <Text variant="footer-text" type="span">
              Follow Us
            </Text>

            <div className="footer__social-icons">
              <a
                href="#"
                className="footer__social-icon footer__social-icon--facebook"
              >
                f
              </a>

              <a
                href="#"
                className="footer__social-icon footer__social-icon--twitter"
              >
                t
              </a>

              <a
                href="#"
                className="footer__social-icon footer__social-icon--instagram"
              >
                in
              </a>

              <a
                href="#"
                className="footer__social-icon footer__social-icon--youtube"
              >
                y
              </a>
            </div>
          </div>

          <Text variant="footer-text" type="p">
            Up to 15% discount on your first subscribe
          </Text>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
