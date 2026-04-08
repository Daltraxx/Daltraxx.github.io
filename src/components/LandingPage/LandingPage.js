import styles from "./LandingPage.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';
import SkillCarousel from './SkillCarousel/SkillCarousel';


function LandingPage({handlePageChange}) {
    return (
      <div className={styles.landingPageBody}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            <a href="/">Dalton Pettus</a>
          </h1>
          <p className={styles.shortDescription}>
            An endlessly curious, ambitious full-stack software engineer
            passionate about learning and building. Instrumental in serving any
            person or organization looking to meet their project or development
            goals. Excited by hard problems. Work with someone who loves what
            they do.
          </p>
          <LandingPageNav handlePageChange={handlePageChange} />
        </header>
        <main>
          <SkillCarousel handlePageChange={handlePageChange} />
        </main>
      </div>
    );
}

export default LandingPage;