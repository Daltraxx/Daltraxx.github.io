import styles from "./SkillCarousel.module.css";

import skills from "../../../resources/skills";
import clsx from "clsx";
import { Link } from "react-router";

function SkillCarousel({ className }) {

  const skillIconDisplay = skills.map((skill) => (
    <div className={styles.iconContainer} key={skill.id}>
      <Link
        to="/resume"
        aria-label="Navigate to Resume page"
        className={styles.iconLink}
      >
        <img
          src={skill.src}
          alt={skill.alt || skill.name}
          width={skill.width ?? 70}
          height={skill.height ?? 70}
        />
      </Link>
    </div>
  ));

  return (
    <section className={clsx(styles.skillsSection, className)}>
      <h2>Experience With</h2>
      <div className={styles.iconDisplay}>{skillIconDisplay}</div>
    </section>
  );
}

export default SkillCarousel;
