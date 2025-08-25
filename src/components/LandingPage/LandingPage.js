import React from 'react';
import styles from "./LandingPage.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';


function LandingPage({handlePageChange}) {
    return (
      <>
        <h1 className={styles.heading}>
          <a href="/" aria-current="page">
            Dalton Pettus
          </a>
        </h1>
        <p className={styles.shortDescription}>
          An endlessly curious, ambitious software engineer passionate about
          learning and building. Instrumental in servicing any person or
          organization looking to meet their project or development goals. Work
          with someone who loves what they do — reach out and let's have a
          conversation.
        </p>
        <LandingPageNav handlePageChange={handlePageChange} />
      </>
    );
}

export default LandingPage;