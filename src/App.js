import React, { useState } from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';
import Header from './components/Header/Header';

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


  //merge at least these
  if (page === 'about') {
    return (
      <Header handlePageChange={handlePageChange}/>
    );
  }

  if (page === 'resume') {
    return (
      <h1>Resume</h1>
    );
  }

  if (page === 'projects') {
    return (
      <h1>Projects</h1>
    );
  }

  if (page === 'contact') {
    return (
      <h1>Contact</h1>
    );
  }
  
}

export default App;
