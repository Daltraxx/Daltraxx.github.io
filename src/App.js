import React from 'react';
import styles from './App.module.css';
import LandingPage from './components/LandingPage/LandingPageIntro';

function App() {
  return (
    <div className={styles.main}>
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
