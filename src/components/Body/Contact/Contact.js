import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

import handleEmail from "../../../utils/handleEmail";

/**
 * Contact component that displays contact information and interactive links.
 * 
 * Features a toggle functionality activated by the spacebar key that transforms
 * the visual style of contact links. The component includes links to LinkedIn
 * and an email button.
 * 
 * @component
 * @returns {JSX.Element} A section containing contact information with styled links
 * that can be toggled between normal and "cool" styles using the spacebar.
 * 
 * @example
 * return (
 *   <Contact />
 * )
 * 
 * @description
 * - Listens for spacebar keyup events to toggle link styling
 * - Prevents spacebar toggle when user is interacting with input fields, textareas,
 *   buttons, links, or contentEditable elements
 * - Cleans up event listener on component unmount
 * - Displays a tip about the spacebar functionality
 * - Provides LinkedIn and email contact options
 */
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
