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
    <button
      type="button"
      className={styles.contactButton}
      onClick={handleEmail}
      id="contact-link-footer"
    >
      Email
    </button>
  );

  return (
    <section className={styles.contactLinksSection}>
      <ul>
        <li>{linkedInLink}</li>
        <li>{emailLink}</li>
      </ul>
    </section>
  );
}

export default ContactLinks;
