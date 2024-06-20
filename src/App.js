import React from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <LandingPageIntro />
      </header>
      <main>
        <SkillCarousel />
      </main>
    </div>
  );
}

export default App;
