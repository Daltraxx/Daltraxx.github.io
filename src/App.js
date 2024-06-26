import React, { useState } from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';
import Header from './components/Header/Header';
import About from './components/Body/About/About';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageChange = ({target}) => {
    //Change site background color when leaving landing page
    let body = document.querySelector('body');
    if (body.style.backgroundColor !== 'white') {
      body.style.backgroundColor = 'white';
    }

    setPage(prevPage => target.name);
  }

  //render correct page
  const getBody = (page) => {
    switch (page) {
      case 'about':
        return <About />;
      case 'resume':
        return <h1>Resume</h1>;
      case 'projects':
        return <h1>Projects</h1>;
      case 'contact':
        return <h1>Contact</h1>;
      default:
        return <h2>You found a page that shouldn't exist. Good for you.</h2>
    }
  }


  if (page === 'landing') {
    return (
      <div className={styles.body}>
        <header className={styles.header}>
          <LandingPageIntro handlePageChange={handlePageChange} />
        </header>
        <main>
          <SkillCarousel />
        </main>
      </div>
    );
  } else {
    return (
      <>
        <Header handlePageChange={handlePageChange} currentPage={page}/>
        {getBody(page)}
      </>
    )
  }
}

export default App;
