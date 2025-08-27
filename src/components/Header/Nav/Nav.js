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
              aria-current={currentPage === "about" ? "page" : undefined}
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
              aria-current={currentPage === "resume" ? "page" : undefined}
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
              aria-current={currentPage === "projects" ? "page" : undefined}
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
              aria-current={currentPage === "contact" ? "page" : undefined}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;