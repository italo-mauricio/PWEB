"use client"; 

import useSWR from 'swr'

export default function MovieDetail({ params }){

    const {data, error} = useSWR(`http://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=$&i=${params.imdbID}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div className='flex flex-col justify-center m-60 items-center'>
          <h1 className='text-red-600 flex justify-center text-3xl py-6'>{data.Title} ({data.Year})</h1>
          <img className='border-red-600 border-8 rounded-xl justify-center w-56' src={data.Poster} alt={data.Title} />
          <p className='flex justify-center text-3xl py-6'>imDB Note: {data.imdbRating}</p>
        </div>
      ); 

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}