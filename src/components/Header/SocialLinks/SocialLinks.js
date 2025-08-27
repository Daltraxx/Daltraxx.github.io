import clsx from 'clsx';
import styles from './SocialLinks.module.css';

function SocialLinks({ className }) {
    return (
        <ul className={clsx(styles.socialLinksContainer, className)}>
            <li><a href="https://github.com/Daltraxx" target="_blank"  rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dalton-pettus/" target="_blank"  rel="noopener noreferrer">LinkedIn</a></li>        </ul>
    )
}

export default SocialLinks;