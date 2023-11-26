// Importe a imagem no topo do arquivo
import React from 'react';
import styles from '../styles/receita1-contact.module.css';
import instagramLogo from '../public/images/1.png'; // Remova "public" do caminho

function Contact() {
    return (
        <div className={styles.contact}>
            <h2>Contatos</h2>
            <p>Caso queira conhecer mais sobre a festa:</p>
            <ul>
                <li>
                    <a href="https://www.instagram.com/festadesantanacaicooficial/?hl=pt" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="" className={styles.instagramLogo} />
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;