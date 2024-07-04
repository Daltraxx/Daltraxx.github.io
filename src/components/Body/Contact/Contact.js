import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

import handleEmail from '../../../utils/handleEmail';

function Contact() {
    const [transform, setTransform] = useState(false);

    useEffect(() => {
        const linkTransform = ({ key }) => {
            if (key === ' ') {
                //console.log('works!');
                transform ? setTransform(prev => false) : setTransform(prev => true);
            }
        }

        document.addEventListener('keyup', linkTransform);

        return () => {
            document.removeEventListener('keyup', linkTransform);
        }
    }, [transform]);

    

    return (
        <section className={styles.contact}>
            <h2 className='page-header'>Contact</h2>
            <p>I am open to inquiries regarding anything from individual projects up to full-time employment. Relocation can be discussed if necessary.</p>
            <aside>(press the spacebar for cooler buttons)</aside>
            <p>Please</p>
            <a className={`${transform ? `${styles.coolLink}` : ''}`} href="https://www.linkedin.com/in/dalton-pettus/" aria-label="LinkedIn link">message me on LinkedIn</a>
            <p>or</p>
            <a className={`${transform ? `${styles.coolLink}` : ''}`} href='#!' onClick={handleEmail} id='contact-link' aria-label="email button">send me an email</a>
            <p>*Measures are being taken against bots and a proper, more fleshed-out Contact form is coming soon.</p>
        </section>
    );
}

export default Contact;