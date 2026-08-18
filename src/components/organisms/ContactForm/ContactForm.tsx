import { useState } from "react";
import { Input, Button, Heading } from "../../atoms";
import "./ContactForm.css";

interface ContactFormProps {
  title: string;
  onSubmit?: (data: { name: string; email: string; phone: string; message: string }) => void;
}

// The Input atom only supports text/checkbox/range, not textarea,
// so the message field is a plain <textarea> instead of <Input>.
function ContactForm({ title, onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.({ name, email, phone, message });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Heading lvl={3}>{title}</Heading>

      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="contact-form__input"
      />
      <Input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="contact-form__input"
      />
      <Input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="contact-form__input"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="contact-form__textarea"
      />

      <Button variant="subscribe-button" className="button button--subscribe-button" type="submit">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
