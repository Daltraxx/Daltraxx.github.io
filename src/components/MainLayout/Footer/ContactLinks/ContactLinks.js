import styles from "./ContactLinks.module.css";

import handleEmail from "../../../../utils/handleEmail";

function ContactLinks() {
  const linkedInLink = (
    <a
      href="https://www.linkedin.com/in/dalton-pettus/"
      target="_blank"
      rel="noreferrer"
      className={styles.contactButton}
    >
      LinkedIn
    </a>
  );

  const emailLink = (
    <a
      href="mailto:hiddenemail@example.com"
      className={styles.contactButton}
      onClick={handleEmail}
      id="contact-link-footer"
    >
      Email
    </a>
  );

  return (
    <section className={styles.contactLinksSection} aria-label="Contact links">
      <ul>
        <li>{linkedInLink}</li>
        <li>{emailLink}</li>
      </ul>
    </section>
  );
}

export default ContactLinks;
