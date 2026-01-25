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
              California. I grew to love fitness and sports, but was also very
              much a nerd with a passion for immersive stories and worlds, often
              losing myself in books, games, and other media. I excelled in
              school and enjoyed learning outside of the classroom as well,
              especially when it came to history and physics.
            </p>
          </div>
          <div className={verbosity < 70 ? styles.none : styles.bioParagraph}>
            <p>
              Despite some interest in engineering as a profession, I had from a
              young age dreamt of becoming a Navy SEAL. It seemed the ultimate
              test a person could put themselves through, an irresistible
              challenge of the kind I have a penchant for. However, for better
              or worse, at some point during my time in university I became
              disillusioned with the idea.
            </p>
          </div>
        </section>
        <section className={verbosity < 75 ? styles.none : styles.bioCol}>
          <div className={verbosity < 80 ? styles.none : styles.bioParagraph}>
            <p>
              I graduated from University of San Diego in 2016. Unsure of my
              career path, I worked various jobs including at a moving company
              and as an immigration paralegal, but eventually accepted work
              doing QA at a tech company in 2018. This was the first occupation
              I managed to find some intrinsic reward in.
            </p>
          </div>
          <div className={verbosity < 85 ? styles.none : styles.bioParagraph}>
            <p>
              I've always deeply enjoyed the process of building things and
              solving problems. For most of my life, this was limited to the
              physical space and writing stories, but QA introduced me to
              software developers and the world they inhabit. Up until then, the
              craft of programming seemed impenetrable to me, but finally seeing
              it in the workplace incited my decision to start toying with code
              myself.
            </p>
          </div>
        </section>
        <section className={verbosity < 90 ? styles.none : styles.bioCol}>
          <div className={verbosity < 95 ? styles.none : styles.bioParagraph}>
            <p>
              I began studying Python in 2020 and found that the joy of building
              things and orchestrating applications was the first vocation to
              really excite me since my childhood infatuation with the SEALs. I
              pivoted to learning all things computer science, beginning with
              the practical decision to become skilled with JavaScript and the
              domain of web development.
            </p>
          </div>
          <div className={verbosity < 100 ? styles.none : styles.bioParagraph}>
            <p>
              I continued to work in QA while learning full-stack development,
              even finding some success in it as I was promoted to lead.
              But building was what I wanted to spend my days doing, and in
              2024 I left my position to pursue a career as a software developer
              full-time. Two years worth of improved skills, personal projects,
              and client work later, I can now say I get to spend every day
              doing what I love.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Bio;
