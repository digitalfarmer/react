import { contactSection } from "../data/ContactSection";
import "../Styles/Contact.css";
import parse from "html-react-parser";

function Contact(props) {
  return (
    
      <div className="footer">
        {contactSection.contactList.map((contact, index) => {
          return (
            <div className="footer-section" key={index}>
              <h3>{contact.title}</h3>
              {parse(contact.content)}
            </div>
          )
        })}
      </div>
    
  );
}

export default Contact;
