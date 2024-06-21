import React, { useState } from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageChange = ({target}) => {
    setPage(prevPage => target.name);
    console.log(target.name);
  }


  if (page === 'landing') {
    return (
      <div className={styles.body}>
        <header className={styles.header}>
          <LandingPageIntro handlePageChange={handlePageChange}/>
        </header>
        <main>
          <SkillCarousel />
        </main>
      </div>
    );
  } 

  if (page === 'about') {
    return (
      <h1>hello</h1>
    );
  }
  
}

export default App;
