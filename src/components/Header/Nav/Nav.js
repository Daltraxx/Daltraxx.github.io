import clsx from 'clsx';
import styles from './Nav.module.css';
import navItems from '../../../resources/navItems';


function Nav({ handlePageChange, currentPage }) {
    const getClassName = (page) =>
      page === currentPage
        ? clsx(
            styles.navButton,
            styles.current
          )
        : styles.navButton;
    


    return (
      <nav className={styles.navContainer} aria-label='Primary'>
        <ul>
            {navItems.map(({ id, label }) => (
                <li key={id}>
                    <a
                        href="#"
                        className={getClassName(id)}
                        onClick={handlePageChange}
                        data-page={id}
                        role='button'
                        aria-current={currentPage === id ? "page" : undefined}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    );
}

export default Nav;