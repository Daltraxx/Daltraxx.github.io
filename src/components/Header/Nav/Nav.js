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
                        data-page="about"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("resume")}
                        onClick={handlePageChange}
                        data-page="resume"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("projects")}
                        onClick={handlePageChange}
                        data-page="projects"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#!"
                        className={getClassName("contact")}
                        onClick={handlePageChange}
                        data-page="contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;