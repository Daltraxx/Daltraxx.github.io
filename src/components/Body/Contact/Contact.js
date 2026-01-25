import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

import handleEmail from "../../../utils/handleEmail";

function Contact() {
  const [transform, setTransform] = useState(false);

  useEffect(() => {
    const linkTransform = ({ key }) => {
      const activeEl = document.activeElement;
      const isInteractive =
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.tagName === "BUTTON" ||
          activeEl.tagName === "A" ||
          activeEl.isContentEditable);
      if (key === " " && !isInteractive) {
        setTransform((prev) => !prev);
      }
    };

    document.addEventListener("keyup", linkTransform);

    return () => {
      document.removeEventListener("keyup", linkTransform);
    };
  }, []);

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
        <button
          type="button"
          className={`${transform ? styles.coolLink : styles.contactLink}`}
          onClick={handleEmail}
          id="contact-link-header"
        >
          send me an email
        </button>
      </section>
    </section>
  );
}

export default Contact;
