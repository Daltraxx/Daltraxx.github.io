import React from 'react';
import styles from './ContactLinks.module.css';

import handleEmail from '../../../utils/handleEmail';

function ContactLinks() {
    return (
        <section className={styles.contactLinksSection}>
            <ul>
                <li><a href="https://www.linkedin.com/in/dalton-pettus/" target="_blank" className={styles.contactButton} aria-label="LinkedIn link">LinkedIn</a></li>
                <li><a href='#!' className={styles.contactButton} onClick={handleEmail} id='contact-link-footer' aria-label="email button">Email</a></li>
            </ul>
        </section>
    )
}

export default ContactLinks;