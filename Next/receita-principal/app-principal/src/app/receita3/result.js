// SearchResults.js
import React from 'react';

const SearchResults = ({ searchResults }) => (
  <div className="flex flex-wrap justify-center">
    {searchResults && searchResults.length > 0 ? (
      searchResults.map((m) => (
        <div key={m.imdbID} className="flex flex-col items-center mb-4 mr-4 bg-white p-4 rounded shadow">
          <img src={m.Poster} alt={m.Title} className="w-48 mb-2 object-cover rounded" />
          <div className="text-center">
            <p className="font-semibold">{m.Title}</p>
            <p className="text-gray-600">{m.Year}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="mt-4 text-gray-600">
        {searchResults ? 'Nenhum resultado encontrado.' : 'Pesquise um filme.'}
      </p>
    )}
  </div>
);

export default SearchResults;
