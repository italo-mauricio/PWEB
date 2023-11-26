import React from 'react';
import About from './sobre';
import Contact from './contato';
import styles from '../styles/receita1-home.module.css'
import { Table } from './tabela';

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
            <Table />
            <About />
            <Contact />         
        </div>
    );
}