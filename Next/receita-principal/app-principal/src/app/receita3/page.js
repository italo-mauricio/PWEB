"use client"; 
import React, { useState } from 'react';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&s=${searchQuery}`);
      const searchData = await res.json();
      setSearchResults(searchData.Search || []); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Digite o título do filme..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 mr-2 text-red-500"
          />
          <button onClick={handleSearch} className="p-2 bg-blue-500 text-white">Pesquisar</button>
        </div>
      </div>
      
      <div className="flex flex-row">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((m) => (
            <div key={m.imdbID} className="flex flex-col items-center mb-4 mr-4">
              <img src={m.Poster} alt={m.Title} className="w-48 mb-2" />
              <div className="text-center">{m.Title} ({m.Year})</div>
            </div>
          ))
        ) : (
          <p className="mt-4">{searchQuery ? 'Nenhum resultado encontrado.' : 'Pesquise um filme.'}</p>
        )}
      </div>
    </div>
  );
}