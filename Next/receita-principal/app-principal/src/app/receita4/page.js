"use client"; 
import useSWR from 'swr'
import Link from "next/link";

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=${searchQuery}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div className='flex flex-col justify-center m-32'>
          {data.Search.map((m) => (
            <div key={m.imdbID} className='p-4 border-2 border-red-500 rounded-xl my-4 flex justify-center'>
              <Link href={`/receita4/${m.imdbID}`}>
                <p>{m.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      );  

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}