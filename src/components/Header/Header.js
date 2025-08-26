import Nav from './Nav/Nav';
import SocialLinks from './SocialLinks/SocialLinks';
import styles from './Header.module.css';

function Header({handlePageChange, currentPage}) {
    return (
        <header>
            <div className={styles.headingContainer}>
                <div className={styles.headingSideDiv}>
                </div>
                <div className={styles.headingText}>
                    <h1><a href="/">Dalton Pettus</a></h1>
                </div>
                <div className={styles.headingSideDiv}>
                    <SocialLinks />
                </div>
            </div>
            <Nav handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}

export default Header;