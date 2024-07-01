import React from 'react';
import styles from './VerbositySlider.module.css';

function VerbositySlider({ handleChange, verbosity }) {
    return (
        <section className={styles.verbosity}>
            <form>
                <label htmlFor="verbosity">Verbosity Slider : {`${verbosity}%`}</label>
                <input id="verbosity" name="verbosity" type="range" min="0" max="100" step="1" onChange={handleChange} />
            </form>
        </section>
    );
}

export default VerbositySlider;