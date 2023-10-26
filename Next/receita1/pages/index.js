import React from 'react';
import About from './about';
import Contact from './contact';
import styles from '../style/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>Viva Santana!</h2>
            <About />
            <Contact />
        </div>
    );
}