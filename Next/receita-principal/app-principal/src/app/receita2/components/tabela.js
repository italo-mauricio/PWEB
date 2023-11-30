import React from 'react';

export function Tabela() {
  const data = [
    { jogo: 'Red Dead Redemption', empresa: 'Rockstar', preco: '$350.00' },
    { jogo: 'GTA', empresa: 'Rockstar', preco: '$50.00' },
    { jogo: 'Assassins Creed', empresa: 'Ubisoft', preco: '$80.00' },
    { jogo: 'LA Noire', empresa: 'Rockstar', preco: '$29.99' },
    { jogo: 'Dark Souls', empresa: 'From Software', preco: '$54.99' },
  ];

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b">Jogo</th>
          <th className="py-2 px-4 border-b">Empresa</th>
          <th className="py-2 px-4 border-b">Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map((game, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-2 px-4 border">{game.jogo}</td>
            <td className="py-2 px-4 border">{game.empresa}</td>
            <td className="py-2 px-4 border">{game.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
