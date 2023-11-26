import React from 'react';
import About from './about';
import Contact from './contact';
import styles from '../styles/receita1-home.module.css'

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Viva Santana!</h2>
                <img
                    src="/santana.jpeg"
                    alt="Imagem de Santana"
                    className={styles.santanaImage}
                />
            </div>
            <About />
            <Contact />
        </div>
    );
}