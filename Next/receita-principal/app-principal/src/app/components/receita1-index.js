import React from 'react';
import About from './receita1-about';
import Contact from './receita1-contact';
import styles from './receita1-index';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>Viva Santana!</h2>
            <About />
            <Contact />
        </div>
    );
}