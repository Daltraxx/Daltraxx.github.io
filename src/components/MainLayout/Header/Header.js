import Nav from "./Nav/Nav";
import SocialLinks from "./SocialLinks/SocialLinks";
import styles from "./Header.module.css";
import { Link } from "react-router"

function Header() {
  return (
    <header>
      <div className={styles.headingContainer}>
        <div className={styles.headingSideDiv} aria-hidden="true"></div>
        <div className={styles.headingText}>
          <h1>
            <Link to="/">Dalton Pettus</Link>
          </h1>
        </div>
        <div className={styles.headingSideDiv}>
          <SocialLinks className={styles.socialLinks} />
        </div>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
