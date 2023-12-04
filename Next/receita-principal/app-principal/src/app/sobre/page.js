import React from 'react';

export default function Sobre() {
  const meuNome = "Italo Mauricio";
  const maisInformacoes = "https://github.com/italo-mauricio/PWEB/tree/main/Next/receita-principal/app-principal";
  const deploy = "https://receitas-italo-pweb.vercel.app/";

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre</h1>
        <h2 className="text-3xl mb-8">
          O projeto reúne receitas da disciplina de programação WEB, ministrada pelo professor Fabrício. Este simples site reúne aprendizados de Next JS, cada link aponta para uma receita e sua implementação.
        </h2>
        <ul className="text-left text-4xl">
          <li className="mb-2">
            <strong>Nome:</strong> {meuNome}
          </li>
          <li>
            <strong>Repositório:</strong> <a href={maisInformacoes} target="_blank" rel="noopener noreferrer">{maisInformacoes}</a>
          </li>
          <li className='mb-2'>
            <strong>Deploy:</strong> <a href={deploy} target="_blank" rel="noopener noreferrer">{deploy}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
