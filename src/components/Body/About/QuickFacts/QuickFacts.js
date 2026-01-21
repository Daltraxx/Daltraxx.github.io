import React, { useState } from "react";
import styles from "./QuickFacts.module.css";

function QuickFacts({ verbosity }) {
  const [fact, setFact] = useState(null);

  const handleClick = ({ target }) => {
    setFact(target.id);
  };

  // Render More Information conditionally based on currently selected fact
  const getExtraInfo = () => {
    switch (fact) {
      case "01":
        return (
          <p>
            I began learning Python as I was studying economics, but quickly
            found myself enthralled with programming's logical nature and the
            act of building things that could be used by myself and others. I
            enjoyed making things in a way that felt smooth and intuitive, with
            tackling difficult problems and seeing everything come together into
            a working whole. I knew then that this is what I wanted to spend my
            life doing.
          </p>
        );
      case "02":
        return (
          <p>
            While working in QA, I took online courses, built projects, and
            vigorously studied computer science, web development, software
            engineering, anything that I felt would get me closer to my goal. I
            grew professionally as I was promoted to lead, participated in
            sprints, and collaborated with developers, but I knew that my true
            passion lay in the building and fixing, not just the finding of
            problems.
          </p>
        );
      case "03":
        return (
          <p>
            I always want to work towards being within the vanguard of my field,
            exploring new technologies and pushing them forward. Much of this
            stems from my admiration of past inventors and innovators, from
            Babbage and Lovelace to the pioneers of the computing and internet
            revolutions. One inherently always feels behind while working in
            this field, and frankly, I love that about it. It's never boring.
            There's always more to learn.
          </p>
        );
      case "04":
        return (
          <p>
            Personal development and self-actualization are overarching
            obsessions of mine. An avid follower of routine, I schedule everyday
            with intention. I never want to grow stagnant or "comfortable". As a
            result, I love to challenge myself in every way that I can.
            Tangentially, I have a lifelong passion for stories told through any
            medium. Building things oneself and admiring the craft of others are
            two of the most rewarding experiences in existence.
          </p>
        );
      default:
        return <p>Click a bullet point to display more information!</p>;
    }
  };

  return (
    <section className={styles.factsContainer}>

      {/* BULLET POINTS SECTION */}
      <section className={styles.factsHalf}>
        <div className={`bullet-points ${styles.bulletPointsContainer}`}>
          <h3>The Bullet Points</h3>
          <ul>
            <li className={verbosity >= 25 ? "" : styles.factsHide}>
              <span
                id="01"
                onClick={handleClick}
                style={
                  fact === "01"
                    ? { backgroundColor: "var(--gray-300)" }
                    : undefined
                }
              >
                Began learning first program language, Python, in May of 2020.
              </span>
            </li>
            <li className={verbosity >= 30 ? "" : styles.factsHide}>
              <span
                id="02"
                onClick={handleClick}
                style={
                  fact === "02"
                    ? { backgroundColor: "var(--gray-300)" }
                    : undefined
                }
              >
                Studied web development and software engineering while working
                in QA.
              </span>
            </li>
            <li className={verbosity >= 35 ? "" : styles.factsHide}>
              <span
                id="03"
                onClick={handleClick}
                style={
                  fact === "03"
                    ? { backgroundColor: "var(--gray-300)" }
                    : undefined
                }
              >
                Deep interest in emerging technologies and tools.
              </span>
            </li>
            <li className={verbosity >= 40 ? "" : styles.factsHide}>
              <span
                id="04"
                onClick={handleClick}
                style={
                  fact === "04"
                    ? { backgroundColor: "var(--gray-300)" }
                    : undefined
                }
              >
                Other passions include fitness, reading and writing, video
                games, and general self-improvement.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* EXTRA INFO SECTION */}
      <section
        className={
          verbosity >= 50
            ? styles.factsHalf
            : `${styles.factsHalf} ${styles.factsHide}`
        }
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
