import React from 'react';
import styles from './SocialLinks.module.css';

function SocialLinks() {
    return (
        <ul className={styles.socialLinksContainer}>
            <li><a href="https://github.com/Daltraxx" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dalton-pettus/" target="_blank">LinkedIn</a></li>
        </ul>
    )
}

export default SocialLinks;