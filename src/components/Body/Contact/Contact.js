import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

import handleEmail from "../../../utils/handleEmail";

function Contact() {
  const [transform, setTransform] = useState(false);

  useEffect(() => {
    const linkTransform = ({ key }) => {
      if (key === " ") {
        //console.log('works!');
        transform
          ? setTransform((prev) => false)
          : setTransform((prev) => true);
      }
    };

    document.addEventListener("keyup", linkTransform);

    return () => {
      document.removeEventListener("keyup", linkTransform);
    };
  }, [transform]);

  return (
    <section className={styles.contact}>
      <h2 className="page-header">Contact</h2>
      <section className={styles.contactMain}>
        <p className={styles.contactIntro}>
          I am open to inquiries regarding anything from individual projects up
          to full-time employment. Chats are also welcome.
        </p>
        <aside className={styles.spacebarTip}>
          (press the spacebar for cooler buttons)
        </aside>
        <p>Please</p>
        <a
          className={`${transform ? styles.coolLink : styles.contactLink}`}
          href="https://www.linkedin.com/in/dalton-pettus/"
          aria-label="LinkedIn link"
        >
          message me on LinkedIn
        </a>
        <p>or</p>
        <a
          className={`${transform ? styles.coolLink : styles.contactLink}`}
          href="#!"
          onClick={handleEmail}
          id="contact-link-header"
          aria-label="email button"
        >
          send me an email
        </a>
      </section>
    </section>
  );
}

export default Contact;
