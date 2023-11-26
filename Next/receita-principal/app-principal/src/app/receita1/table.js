import React from 'react';
import styles from '../styles/receita1-table.module.css';

export function Table() {
  const data = [
    { nome: 'IPA', marca: 'Cervejaria A' },
    { nome: 'Pilsner', marca: 'Cervejaria B' },
    { nome: 'Stout', marca: 'Cervejaria C' },
    { nome: 'Amber Ale', marca: 'Cervejaria D' },
    { nome: 'Witbier', marca: 'Cervejaria E' },
  ];

  return (
    
    <table className={styles.mytable}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        {data.map((beer, index) => (
          <tr key={index}>
            <td>{beer.nome}</td>
            <td>{beer.marca}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
