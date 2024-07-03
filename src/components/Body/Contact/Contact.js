import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

import getEmail from './resources/getEmail';
import obfuscateEmail from './resources/obfuscateEmail';

function Contact() {
    const [transform, setTransform] = useState(false);

    const linkTransform = ({ key }) => {
        if (key === ' ') {
            //console.log('works!');
            transform ? setTransform(prev => false) : setTransform(prev => true);
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', linkTransform);

        return () => {
            document.removeEventListener('keyup', linkTransform);
        }
    }, [transform]);


    //click event for adding email to href to activate mailto then obfuscate the email
    const handleEmail = ({ target }) => {
        const email = getEmail().join('');
        target.href = 'mailto:' + email;
        setTimeout(obfuscateEmail, 5);
    }

    

    return (
        <section className={styles.contact}>
            <h2 className='page-header'>Contact</h2>
            <p>I am open to inquiries regarding anything from individual projects up to full-time employment. Relocation can be discussed if necessary.</p>
            <aside>(pressing the spacebar will make the below buttons look much cooler)</aside>
            <p>Please</p>
            <a className={`${transform ? `${styles.coolLink}` : ''}`} href="https://www.linkedin.com/in/dalton-pettus/" aria-label="LinkedIn link">message me on LinkedIn</a>
            <p>or</p>
            <a className={`${transform ? `${styles.coolLink}` : ''}`} href='#!' onClick={handleEmail} id='contact-link' aria-label="email button">send me an email</a>
            <p>*Measures are being taken against bots and a proper, more fleshed-out Contact form is coming soon.</p>
        </section>
    );
}

export default Contact;