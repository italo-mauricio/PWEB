// Importe a imagem no topo do arquivo
import React from 'react';
import styles from '../styles/receita1-contato.module.css';
import Link from 'next/link';


function Contact() {
    return (
        <div className={styles.contato}>
            <h1>Contatos</h1>
            <h2>Caso queira conhecer mais sobre a festa:</h2>
            <ul>
                <li>
                    <Link href="https://www.instagram.com/festadesantanacaicooficial/?hl=pt" target="_blank" rel="noopener noreferrer">Instagram</Link>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
