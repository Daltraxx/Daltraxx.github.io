import clsx from "clsx";
import styles from "./Nav.module.css";
import navItems from "../../../../resources/navItems";
import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className={styles.navContainer} aria-label="Primary">
      <ul>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <NavLink
              to={`/${id}`}
              className={({ isActive }) =>
                clsx(styles.navButton, isActive && styles.current)
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
