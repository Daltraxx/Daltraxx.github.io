import React from 'react';
import styles from "./LandingPage.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';


function LandingPage({handlePageChange}) {
    return (
        <>
            <h1 className={styles.heading}>Dalton Pettus</h1>
            <p className={styles.shortDescription}>
                An impassioned and prodigiously ambitious developer seeking his first official role in front-end development. 
                I'm constantly learning new technologies and honing skills both practiced and novel, and am confident that in time I will be a contributing force 
                within the world of software development. It is an exciting path to be on.
            </p>
            <LandingPageNav handlePageChange={handlePageChange}/>
        </>
    )
}

export default LandingPage;