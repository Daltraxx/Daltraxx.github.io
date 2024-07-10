import React from 'react';
import styles from './ContactLinks.module.css';

import handleEmail from '../../../utils/handleEmail';

function ContactLinks() {

    const linkedInLink = <a 
        href="https://www.linkedin.com/in/dalton-pettus/" 
        target="_blank"
        rel="noreferrer"
        className={styles.contactButton} 
        aria-label="LinkedIn link">
        LinkedIn
        </a>;

    const emailLink = <a 
        href='#!' 
        className={styles.contactButton} 
        onClick={handleEmail} 
        id='contact-link-footer' 
        aria-label="email button">
        Email
        </a>;
        
    return (
        <section className={styles.contactLinksSection}>
            <ul>
                <li>
                    {linkedInLink}
                </li>
                <li>
                    {emailLink}
                </li>
            </ul>
        </section>
    )
}

export default ContactLinks;