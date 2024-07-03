import React from 'react';
import styles from "./LandingPageIntro.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';


function LandingPageIntro({handlePageChange}) {
    return (
        <>
            <h1 className={styles.heading}>Dalton Pettus</h1>
            <p className={styles.shortDescription}>An impassioned and prodigiously ambitious developer seeking his first official role in front-end development. I'm far from it now, but every day I strive closer to becoming the best programmer I can be.</p>
            <LandingPageNav handlePageChange={handlePageChange}/>
        </>
    )
}

export default LandingPageIntro;