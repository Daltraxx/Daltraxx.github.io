import React, { useState } from 'react';
import styles from './App.module.css';
import LandingPageIntro from './components/LandingPage/LandingPageIntro';
import SkillCarousel from './components/SkillCarousel/SkillCarousel';
import Header from './components/Header/Header';
import About from './components/Body/About/About';
import Resume from './components/Body/Resume/Resume';
import Projects from './components/Body/Projects/Projects';
import Contact from './components/Body/Contact/Contact';

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
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
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
        <main className={styles.main}>
          {getBody(page)}
        </main>
      </>
    )
  }
}

export default App;
