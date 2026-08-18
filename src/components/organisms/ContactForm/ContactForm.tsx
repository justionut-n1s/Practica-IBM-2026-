import { useState } from "react";
import { Input, Button, Heading } from "../../atoms";
import { translations } from "../../../translations/translations";
import "./ContactForm.css";

interface ContactFormProps {
  title: string;
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

function ContactForm({ title, onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const contactFormTranslate = translations.en.contactForm;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.({ name, email, phone, message });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Heading lvl={3}>{title}</Heading>

      <Input
        type="text"
        placeholder={contactFormTranslate.namePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="contact-form__input"
      />
      <Input
        type="text"
        placeholder={contactFormTranslate.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="contact-form__input"
      />
      <Input
        type="text"
        placeholder={contactFormTranslate.phonePlaceholder}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="contact-form__input"
      />
      <textarea
        placeholder={contactFormTranslate.textareaPlaceholder}
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="contact-form__textarea"
      />
      <Button variant="send-message-button" type="submit">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
