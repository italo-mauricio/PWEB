// SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <div className="flex items-center">
    <input
      type="text"
      placeholder="Digite o título do filme..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 border border-gray-300 mr-2 focus:outline-none rounded-l"
    />
    <button onClick={handleSearch} className="p-2 bg-blue-700 text-white rounded-r focus:outline-none">
      Pesquisar
    </button>
  </div>
);

export default SearchBar;
