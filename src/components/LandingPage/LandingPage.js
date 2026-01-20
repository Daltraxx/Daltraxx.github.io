import styles from "./LandingPage.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';


function LandingPage({handlePageChange}) {
    return (
      <>
        <h1 className={styles.heading}>
          <a href="/">
            Dalton Pettus
          </a>
        </h1>
        <p className={styles.shortDescription}>
          An endlessly curious, ambitious full-stack software engineer passionate about
          learning and building. Instrumental in serving any person or
          organization looking to meet their project or development goals. Excited by hard problems. Work
          with someone who loves what they do.
        </p>
        <LandingPageNav handlePageChange={handlePageChange} />
      </>
    );
}

export default LandingPage;