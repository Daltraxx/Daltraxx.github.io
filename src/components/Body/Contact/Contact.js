import React from 'react';
import styles from './Contact.module.css';

import getEmail from './resources/getEmail';
import obfuscateEmail from './resources/obfuscateEmail';

function Contact() {
    
    const handleEmail = ({ target }) => {
        const email = getEmail().join('');
        target.href = 'mailto:' + email;
        setTimeout(obfuscateEmail, 5);
    }

    return (
        <section>
            <h2 className='page-header'>Contact</h2>
            <p>I am open to inquiries regarding anything from individual projects up to full-time employment, and relocation can be discussed if necessary.</p>
            <p><a href="https://www.linkedin.com/in/dalton-pettus/">Please message me on LinkedIn</a></p>
            <p>OR</p>
            <p><a href='#!' onClick={handleEmail} id='contact-link'>send me an email</a></p>
            <p>*Measures are being taken against bots, and a proper, more fleshed-out Contact form is coming soon.</p>
        </section>
    );
}

export default Contact;