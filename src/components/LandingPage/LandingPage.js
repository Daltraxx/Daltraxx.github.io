import React from 'react';
import styles from "./LandingPage.module.css"
import LandingPageNav from './LandingPageNav/LandingPageNav';


function LandingPage({handlePageChange}) {
    return (
        <>
            <h1 className={styles.heading}><a href="# ">Dalton Pettus</a></h1>
            <p className={styles.shortDescription}>
                An impassioned and prodigiously ambitious software engineer who loves learning and building things. 
                Instrumental in servicing any person or organization looking to meet their project or development goals.
                Reach out and let's have a conversation.
            </p>
            <LandingPageNav handlePageChange={handlePageChange}/>
        </>
    )
}

export default LandingPage;