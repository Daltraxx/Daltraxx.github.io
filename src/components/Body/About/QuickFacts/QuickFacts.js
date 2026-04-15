import React, { useState } from "react";
import styles from "./QuickFacts.module.css";
import clsx from "clsx";

const FACTS = [
  {
    id: "01",
    minVerbosity: 25,
    text: "Began learning first program language, Python, in May of 2020.",
    extraInfo: `I began learning Python as I was studying economics, but quickly
            found myself enthralled with programming's logical nature and the
            act of building things that could be used by myself and others. I
            enjoyed making things in a way that felt smooth and intuitive, with
            tackling difficult problems and seeing everything come together into
            a working whole. I knew then that this is what I wanted to spend my
            life doing.`,
  },
  {
    id: "02",
    minVerbosity: 30,
    text: "Has been working in the tech industry since 2018.",
    extraInfo: `I started studying software engineering while working as a QA analyst. I built projects and
            vigorously studied computer science, web development, system design, DSA, everything necessary to achieve my goal. I
            grew professionally as I was promoted to lead, participated in
            sprints, and collaborated with developers, but by far the most fun
            I had was whenever I had the chance to develop automation scripts for our workflow or anything else that involved code.`,
  },
  {
    id: "03",
    minVerbosity: 35,
    text: "Deep interest in emerging technologies and tools.",
    extraInfo: `I always want to work towards being within the vanguard of my field,
            exploring new technologies and pushing them forward. Much of this
            stems from my admiration of past inventors and innovators, from
            Babbage and Lovelace to the pioneers of the computing and internet
            revolutions. One inherently always feels behind while working in
            this field, and frankly, I love that about it. It's never boring.
            There's always more to learn.`,
  },
  {
    id: "04",
    minVerbosity: 40,
    text: "Other passions include fitness, reading and writing, video games, and general self-improvement.",
    extraInfo: `Personal development and self-actualization are overarching
            obsessions of mine. An avid follower of routine, I schedule everyday
            with intention. I never want to grow stagnant or "comfortable". As a
            result, I love to challenge myself in every way that I can.
            Tangentially, I have a lifelong passion for stories told through any
            medium. Building things oneself and admiring the craft of others are
            two of the most rewarding experiences in existence.`,
  },
  {
    id: "05",
    minVerbosity: 45,
    text: "Genuinely enjoys Leetcode problems.",
    extraInfo: `A lot of people in this field seem to dislike Leetcode and the prevalence of algorithmic coding interviews,
            and honestly I understand the complaints. However, I enjoy coding riddles in the same way I enjoy crossword puzzles or sudoku,
            or even more so. They're fun and I can almost feel new neuronal connections forming as I do them in a way that's very satisfying.
            Are they the best way to measure a candidate's potential? I don't know. But I like doing them.`,
  },
];

/**
 * QuickFacts component displays a list of bullet points about the developer
 * and shows detailed information when a bullet point is selected.
 *
 * The component renders two sections:
 * 1. A list of clickable bullet points that can be filtered by verbosity level
 * 2. An "More Information" section that displays detailed content based on the selected fact
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.verbosity - Controls which facts are visible based on their minimum verbosity requirement.
 *                                   Higher values show more facts. Also controls visibility of the extra info section (hidden below 50).
 *
 * @returns {JSX.Element} A section containing bullet points and expandable detailed information
 *
 * @example
 * <QuickFacts verbosity={75} />
 */
function QuickFacts({ verbosity }) {
  const [fact, setFact] = useState(null);

  const handleClick = ({ currentTarget }) => {
    setFact(currentTarget.id);
  };

  // Render More Information conditionally based on currently selected fact
  const getExtraInfo = () => {
    switch (fact) {
      case "01":
        return <p>{FACTS[0].extraInfo}</p>;
      case "02":
        return <p>{FACTS[1].extraInfo}</p>;
      case "03":
        return <p>{FACTS[2].extraInfo}</p>;
      case "04":
        return <p>{FACTS[3].extraInfo}</p>;
      case "05":
        return <p>{FACTS[4].extraInfo}</p>;
      default:
        return <p>Activate a bullet point to display more information!</p>;
    }
  };

  return (
    <section className={styles.factsContainer}>
      {/* BULLET POINTS SECTION */}
      <section className={styles.factsHalf}>
        <div className={`bullet-points ${styles.bulletPointsContainer}`}>
          <h3>Some Random Facts</h3>
          <ul>
            {FACTS.map(({ id, minVerbosity, text }) => (
              <li
                key={id}
                className={verbosity >= minVerbosity ? "" : styles.factsHide}
              >
                <button
                  type="button"
                  className={clsx(
                    styles.factButton,
                    fact === id && styles.selectedFact,
                  )}
                  id={id}
                  onClick={handleClick}
                  aria-pressed={fact === id}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXTRA INFO SECTION */}
      <section
        className={clsx(styles.factsHalf, verbosity < 50 && styles.factsHide)}
      >
        <div className={styles.factsExtraInfoContainer}>
          <h3>More Information</h3>
          <section className={styles.factsExtraInfoText}>
            {getExtraInfo()}
          </section>
        </div>
      </section>
    </section>
  );
}

export default QuickFacts;
