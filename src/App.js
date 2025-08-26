import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import SkillCarousel from './components/LandingPage/SkillCarousel/SkillCarousel';
import Header from './components/Header/Header';
import About from './components/Body/About/About';
import Resume from './components/Body/Resume/Resume';
import Projects from './components/Body/Projects/Projects';
import Contact from './components/Body/Contact/Contact';
import Footer from './components/Footer/Footer';
import personJsonLd from './lib/jsonLd';

function App() {
  const [page, setPage] = useState("landing");

  const handlePageChange = (event) => {
    event.preventDefault();
    const target = event.target;

    // Determine the new page to navigate to, prioritizing data-page attribute but allow name during transition
    const newPage = target.dataset.page || target.name;

    setPage(newPage);
  };

  // Change site background color depending on the current page
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor =
        page !== "landing" ? "var(--gray-100)" : "var(--primary-blue-700)";
    }
  }, [page]);

  //render correct page
  const getBody = (page) => {
    switch (page) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <h2>You found a page that shouldn't exist. Good for you.</h2>;
    }
  };

  const ldJson = useMemo(
    () => JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
    []
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{ldJson}</script>
      </Helmet>
      {page === "landing" ? (
        <div className={styles.landingPageBody}>
          <header className={styles.header}>
            <LandingPage handlePageChange={handlePageChange} />
          </header>
          <main>
            <SkillCarousel handlePageChange={handlePageChange} />
          </main>
        </div>
      ) : (
        <>
          <Header handlePageChange={handlePageChange} currentPage={page} />
          <main className={styles.main}>{getBody(page)}</main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
