import React from 'react';

function Contato() {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Redes sociais</h2>
        <ul className="list-none p-0">
          <li className="mb-2 flex justify-center">
            <a
              href="https://www.instagram.com/festadesantanacaicooficial/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </li>
          {/* Adicione mais redes sociais conforme necessário */}
        </ul>
      </div>
    );
  }
  

export default Contato;