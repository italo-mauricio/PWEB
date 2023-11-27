// Movies.js
"use client";
import React, { useState } from 'react';
import Title from './title';
import SearchBar from './search';
import SearchResults from './result';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=${searchQuery}`);
      const searchData = await res.json();
      setSearchResults(searchData.Search || []); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-3xl">
      <div className="mb-8 ">
      <div className='p-6 mb-4'>
        <Title />   
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
