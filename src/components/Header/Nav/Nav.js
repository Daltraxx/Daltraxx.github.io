import clsx from 'clsx';
import styles from './Nav.module.css';


function Nav({ handlePageChange, currentPage }) {
    const getClassName = (page) =>
      page === currentPage
        ? clsx(
            styles.navButton,
            styles.current
          )
        : styles.navButton;
    


    return (
        <nav className={styles.navContainer}>
            <ul>
                <li>
                    <a
                        href="#!"
                        className={getClassName("about")}
                        onClick={handlePageChange}
                        name="about"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("resume")}
                        onClick={handlePageChange}
                        name="resume"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("projects")}
                        onClick={handlePageChange}
                        name="projects"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("contact")}
                        onClick={handlePageChange}
                        name="contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;