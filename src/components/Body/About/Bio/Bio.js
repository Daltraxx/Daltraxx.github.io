import styles from "./Bio.module.css";

function Bio({ verbosity }) {
  return (
    <section className={styles.bioContainer}>
      <h3 className={verbosity < 55 ? styles.hide : ""}>Longer Bio</h3>
      <section className={styles.bioColContainer}>
        <section className={verbosity < 60 ? styles.none : styles.bioCol}>
          <div className={verbosity < 65 ? styles.none : styles.bioParagraph}>
            <p>
              I was born in 1994 and grew up in Santee within larger San Diego,
              California. While I remained relatively tech illiterate until my
              twenties - my parents were by no means computer enthusiasts - I
              excelled in high school and would eventually attend University of
              San Diego. For reasons I regret now, I wanted to remain local and
              forwent exploring a wider variety of schools and locales.
            </p>
          </div>
          <div className={verbosity < 70 ? styles.none : styles.bioParagraph}>
            <p>
              I went to college without any related professional aspirations. In
              fact, I spent the majority of my high school and college years
              dreaming of becoming a Navy SEAL. It seemed the ultimate test a
              person could put themselves through, an irresistable challenge of
              the kind I have a penchant for. I majored in political science
              with a minor in psychology, but had little professional interest
              in the topics.
            </p>
          </div>
        </section>
        <section className={verbosity < 75 ? styles.none : styles.bioCol}>
          <div className={verbosity < 80 ? styles.none : styles.bioParagraph}>
            <p>
              I graduated in 2016, and - having lost my desire to join the Navy
              - still had almost no notion of what my larger career path should
              be. I worked various jobs including at a moving company and as an
              immigration paralegal, but eventually accepted work doing QA at a
              tech company in 2018. This was the first occupation I managed to
              find some intrinsic reward in.
            </p>
          </div>
          <div className={verbosity < 85 ? styles.none : styles.bioParagraph}>
            <p>
              Bereft of any deep background using computers, this was the first
              of my employments to challenge me in any real way. I learned fast,
              however, and any challenging aspect was short-lived. I once again
              became bored with the lack of self-application and worried about
              my own stymied growth as a result. I yearned for an occupation
              which would continuously challenge me intellectually and
              creatively.
            </p>
          </div>
        </section>
        <section className={verbosity < 90 ? styles.none : styles.bioCol}>
          <div className={verbosity < 95 ? styles.none : styles.bioParagraph}>
            <p>
              I first began studying Python in 2020 as part of my interest in
              economics, but found that the joy of building things using code
              was the first vocation to really excite me since my childhood
              infatuation with joining the SEALs. I pivoted to learning all
              things computer science, beginning with the practical decision to
              become fluent with JavaScript. Unfortunately, my studies still had
              to remain relegated to my off-hours.
            </p>
          </div>
          <div className={verbosity < 100 ? styles.none : styles.bioParagraph}>
            <p>
              Finally, in the beginning of 2024, I finally devoted myself fully
              to mastering the requisite skills to be a fully capable - even
              exeptional - software engineer. It's a revelation to spend every
              day challenging myself, working with others with similar skills
              and interests, and building things that seemed impossible before.
              I now have a life of continuous actualization, creation, and
              servicing others. I'm finally living my dream.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Bio;

//fix classNames
