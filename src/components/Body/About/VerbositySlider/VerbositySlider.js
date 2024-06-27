import React from 'react';
import styles from './VerbositySlider.module.css';

function VerbositySlider({ handleChange }) {
    return (
        <section className={styles.verbosity}>
            <form>
                <label htmlFor="verbosity">Verbosity Slider</label>
                <input id="verbosity" name="verbosity" type="range" min="0" max="100" step="2" onChange={handleChange} />
            </form>
        </section>
    );
}

export default VerbositySlider;