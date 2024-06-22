import React, { useState } from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';
import Header from './components/Header/Header';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageChange = ({target}) => {
    let body = document.querySelector('body');
    if (body.style.backgroundColor != 'white') {
      body.style.backgroundColor = 'white';
    }

    setPage(prevPage => target.name);
  }

  const getBody = (page) => {
    switch (page) {
      case 'about':
        return <h1>About</h1>;
      case 'resume':
        return <h1>Resume</h1>;
      case 'projects':
        return <h1>Projects</h1>;
      case 'contact':
        return <h1>Contact</h1>;
    }
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
  } else {
    return (
      <>
        <Header handlePageChange={handlePageChange}/>
        {getBody(page)}
      </>
    )
  }
}

export default App;
