import { Heading, Text, Hyperlink } from "../../atoms";
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
  brandName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
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

// Site footer. Props: brandName, tagline, address, phone, email, hours, columns, supportContacts, copyrightText
function Footer({
  brandName,
  tagline,
  address,
  phone,
  email,
  hours,
  columns,
  supportContacts,
  copyrightText,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Heading lvl={2}>{brandName}</Heading>
          <Text variant="footer-text" type="p">
            {tagline}
          </Text>

          <ul className="footer__contact">
            <li>
              <Text variant="footer-text" type="span">
                Address: {address}
              </Text>
            </li>
            <li>
              <Text variant="footer-text" type="span">
                Call Us: {phone}
              </Text>
            </li>
            <li>
              <Text variant="footer-text" type="span">
                Email: {email}
              </Text>
            </li>
            <li>
              <Text variant="footer-text" type="span">
                Hours: {hours}
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
            Secured Payment Gateways
          </Text>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <Text variant="footer-text" type="span">
          {copyrightText}
        </Text>

        <div className="footer__support">
          {supportContacts.map((contact) => (
            <div key={contact.number} className="footer__support-item">
              <span className="footer__support-number">{contact.number}</span>
              <span className="footer__support-text">{contact.label}</span>
            </div>
          ))}
        </div>

        <div className="footer__socials">
          <Text variant="footer-text" type="span">
            Follow Us
          </Text>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
