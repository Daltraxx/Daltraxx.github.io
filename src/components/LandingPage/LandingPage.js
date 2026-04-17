import styles from "./LandingPage.module.css";
import LandingPageNav from "./LandingPageNav/LandingPageNav";
import SkillCarousel from "./SkillCarousel/SkillCarousel";

function LandingPage() {
  return (
    <div className={styles.landingPageBody}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <a href="/">Dalton Pettus</a>
        </h1>
        <p className={styles.shortDescription}>
          Full Stack Engineer with over two years of professional experience
          building business-crucial applications with Next.js, React,
          TypeScript, Node.js, PostgreSQL and other modern tools. Strong
          end-to-end ownership from database design and application logic to
          crafting exceptional UX. Loves hard problems.
        </p>
        <LandingPageNav />
      </header>
      <main>
        <SkillCarousel />
      </main>
    </div>
  );
}

export default LandingPage;
