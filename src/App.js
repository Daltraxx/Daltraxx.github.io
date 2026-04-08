import { useState, useMemo, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/Body/About/About';
import Resume from './components/Body/Resume/Resume';
import Projects from './components/Body/Projects/Projects';
import Contact from './components/Body/Contact/Contact';
import personJsonLd from './lib/jsonLd';
import { Routes, Route } from 'react-router';

// TODO: Delete these once react-router is fully implemented and tested
import Header from "./components/MainLayout/Header/Header";
import Footer from "./components/MainLayout/Footer/Footer";

function App() {
  const [page, setPage] = useState("landing");

  const handlePageChange = useCallback((e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    // Get the page name from data-page attribute or name attribute and
    // prefer currentTarget to avoid picking up nested child without dataset/name
    const el = e ? (e.currentTarget || e.target) : null;
    
    const newPage =
      (el && el.dataset && el.dataset.page) ||
      (el && typeof el.name === "string" ? el.name : undefined);
    
    if (newPage) setPage(newPage);
  }, []);

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
      <Routes>
        <Route
          path="/"
          element={<LandingPage handlePageChange={handlePageChange} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      {page === "landing" ? (
        <>{/* Removed in process of implementing react-router */}</>
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
