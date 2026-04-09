import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/MainLayout/MainLayout";
import personJsonLd from "./lib/jsonLd";
import { Routes, Route } from "react-router";

import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Body/About/About";
import Resume from "./components/Body/Resume/Resume";
import Projects from "./components/Body/Projects/Projects";
import Contact from "./components/Body/Contact/Contact";

function App() {
  const ldJson = useMemo(
    () => JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
    [],
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{ldJson}</script>
      </Helmet>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Main Layout and nested pages */}
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
