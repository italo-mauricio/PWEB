import React from 'react';

function Contato() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Redes Sociais
      </h2>
      <ul className="list-none p-0 flex justify-center">
        <li className="mb-2">
          <a
            href="https://www.instagram.com/festadesantanacaicooficial/?hl=pt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition duration-300"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contato;
