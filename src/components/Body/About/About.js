import React, { useState } from "react";
import styles from "./About.module.css";

import QuickFacts from "./QuickFacts/QuickFacts";
import Bio from "./Bio/Bio";
import VerbositySlider from "./VerbositySlider/VerbositySlider";

/**
 * About component that displays information about the user with adjustable verbosity.
 *
 * The component renders different content based on a verbosity slider value (0-100):
 * - At verbosity <= 10: displays zipper-mouth emojis
 * - At verbosity >= 20: displays QuickFacts component
 * - At verbosity > 50: displays Bio component
 *
 * @component
 * @returns {JSX.Element} A section containing the About page with dynamic content based on verbosity level
 *
 * @example
 * return (
 *   <About />
 * )
 */
function About() {
  const [verbosity, setVerbosity] = useState(50);
  const handleChange = ({ target }) => {
    setVerbosity(Number(target.value));
  };

  const emojiImg = (
    <img
      src="/assets/images/zipper-mouth-emoji.png"
      className={styles.emoji}
      alt="zipped mouth emoji"
    />
  );
  const emojiJSX = (
    <section className={styles.emojiContainer}>
      {emojiImg}
      {verbosity <= 5 && emojiImg}
      {verbosity < 1 && emojiImg}
    </section>
  );

  //render less or more content depending on verbosity
  return (
    <section className={styles.aboutContainer}>
      <h2 className="page-header">About</h2>
      <VerbositySlider handleChange={handleChange} verbosity={verbosity} />
      {verbosity <= 10 && emojiJSX}
      {verbosity >= 20 && <QuickFacts verbosity={verbosity} />}
      {verbosity > 50 && <Bio verbosity={verbosity} />}
    </section>
  );
}

export default About;
