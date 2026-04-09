import { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './App.module.css';
import MainLayout from './components/MainLayout/MainLayout';
import personJsonLd from './lib/jsonLd';
import { Routes, Route } from 'react-router';

// TODO: Delete these once react-router is fully implemented and tested
import Header from "./components/MainLayout/Header/Header";
import Footer from "./components/MainLayout/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Body/About/About";
import Resume from "./components/Body/Resume/Resume";
import Projects from "./components/Body/Projects/Projects";
import Contact from "./components/Body/Contact/Contact";

function App() {
  const [page, setPage] = useState("landing");

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
        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />
        {/* Main Layout and nested pages */}
        <Route element={<MainLayout />}>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
