import styles from "./LandingPageNav.module.css";
import { useState, useId, useRef, useLayoutEffect } from "react";
import navItems from "../../../resources/navItems";
import { Link } from "react-router";

function LandingPageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const menuRef = useRef(null);
  useLayoutEffect(() => {
    if (menuRef.current) {
      const menuElement = menuRef.current;
      const maxHeight = menuOpen ? `${menuElement.scrollHeight}px` : "0px";
      menuElement.style.setProperty("--menu-max-height", maxHeight);
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <button
        type="button"
        className={styles.menuToggleButton}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={toggleMenu}
      >
        {menuOpen ? "Close Menu" : "Open Menu"}
        <span aria-hidden="true">▲</span>
      </button>
      <ul
        id={menuId}
        data-expanded={menuOpen}
        aria-hidden={!menuOpen}
        ref={menuRef}
      >
        {navItems.map(({ id, label }, index) => (
          <li key={id}>
            <Link
              to={`/${id}`}
              className={
                index < navItems.length / 2
                  ? styles.leftNavButton
                  : styles.rightNavButton
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LandingPageNav;
