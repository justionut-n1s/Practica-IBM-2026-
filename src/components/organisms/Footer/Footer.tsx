import { Heading, Text, Image, Hyperlink, Icon } from "../../atoms";

import {
  logo,
  googlePlay,
  appStore,
  payment,
  iconAddress,
  iconPhone,
  iconEmail,
  iconHours,
  iconNumber,
} from "../../../assets/images";

import "./Footer.css";

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
            <Hyperlink message={link.label} link={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ columns, supportContacts, copyrightText }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <Image src={logo} alt="Nest Logo" width={120} height={40} />

          <ul className="footer__contact">
            <li>
              <Icon src={iconAddress} alt="address" size={16} />
              <Text variant="footer-text" type="span">
                Address 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </Text>
            </li>

            <li>
              <Icon src={iconPhone} alt="phone" size={16} />
              <Text variant="footer-text" type="span">
                Call Us (+91)-540-025-124553
              </Text>
            </li>

            <li>
              <Icon src={iconEmail} alt="email" size={16} />
              <Text variant="footer-text" type="span">
                Email sale@Nest.com
              </Text>
            </li>

            <li>
              <Icon src={iconHours} alt="hours" size={16} />
              <Text variant="footer-text" type="span">
                Hours 10:00 - 18:00, Mon - Sat
              </Text>
            </li>
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
        <div className="footer__copyright">
          <Text variant="footer-text" type="span">
            {copyrightText}
          </Text>
        </div>

        <div className="footer__support">
          {supportContacts.map((contact) => (
            <div key={contact.number} className="footer__support-item">
              <Icon src={iconNumber} alt="phone" size={16} />

              <div>
                <span className="footer__support-number">{contact.number}</span>

                <span className="footer__support-text">{contact.label}</span>
              </div>
            </div>
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
