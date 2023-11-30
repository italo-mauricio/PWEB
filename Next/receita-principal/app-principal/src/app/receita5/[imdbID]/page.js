"use client"; 

import useSWR from 'swr'
import Link from 'next/link';

export default function MovieDetail({ params }) {
    const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=2517b62d&i=${params.imdbID}`, fetcher);

    if (error) return <div>falha na requisição...</div>;
    if (!data) return <div>carregando...</div>;

    return (
        <div className='flex flex-col justify-center m-60 items-center'>
            <h1 className='text-blue-500 flex justify-center text-3xl py-6'>{data.Title} ({data.Year})</h1>
            <img className='border-blue-500 border-8 rounded-xl justify-center w-56' src={data.Poster} alt={data.Title} />
            <p className='flex justify-center text-3xl py-6'>imDB Note: {data.imdbRating}</p>
            
            <Link href='/receita5'>
                <p className='bg-blue-600 text-white rounded-lg p-3 mt-4 cursor-pointer text-2xl'>Voltar</p>
            </Link>
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
