import React from 'react';
import styles from '../styles/receita1-tabela.module.css';

export function Tabela() {
  const data = [
    { jogo: 'Red Dead Redemption', empresa: 'Rockstar', preco: '$350.00' },
    { jogo: 'GTA', empresa: 'Rockstar', preco: '$50.00' },
    { jogo: 'Assassins Creed', empresa: 'Ubisoft', preco: '$80.00' },
    { jogo: 'LA Noire', empresa: 'Rockstar', preco: '$29.99' },
    { jogo: 'Dark Souls', empresa: 'From Software', preco: '$54.99' },
  ];

  return (
    <table className={styles.tabela}>
      <thead>
        <tr>
          <th>Jogo</th>
          <th>Empresa</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map((game, index) => (
          <tr key={index}>
            <td>{game.jogo}</td>
            <td>{game.empresa}</td>
            <td>{game.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
