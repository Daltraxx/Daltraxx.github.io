import React from 'react';
import styles from './ContactLinks.module.css';

function ContactLinks() {
    return (
        <section className={styles.contactLinksSection}>
            <ul>
                <li><a href="https://www.linkedin.com/in/dalton-pettus/" target="_blank" className={styles.contactButton}>LinkedIn</a></li>
                <li><a href='#!' className={styles.contactButton}>Email</a></li>
            </ul>
        </section>
    )
}

export default ContactLinks;