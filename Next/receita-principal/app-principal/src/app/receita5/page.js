"use client";

import useSWR from 'swr'
import {useState} from 'react'
import Link from "next/link";



export default function Movies3(){

    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)
    const onClickHandler = (e) => {

      e.preventDefault()
        if (url === '') setUrl(`https://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=bagdad`)
        else setUrl('')
    }

    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
          {data.Search.map((m) => (
            <div key={m.imdbID} className='max-w-xs'>
              <Link href={`/receita5/${m.imdbID}`}>
                <p>
                  <img
                    src={m.Poster !== 'N/A' ? m.Poster : '/placeholder-image.jpg'}
                    alt={m.Title}
                    className='w-full h-auto cursor-pointer'
                  />
                </p>
              </Link>
              <p className='text-center mt-2 bg-blue-600 rounded-lg p-3  text-2xl'>
                <Link href={`/receita5/${m.imdbID}`}>
                  <p className='text-white'>{m.Title}</p>
                </Link>
              </p>
            </div>
          ))}
        </div>
      );

}

export function TheLink({url, handler}){    

    return (
        <div className='flex justify-center'>
            <a className='bg-blue-500 rounded-lg p-3 text-4xl text-white' href="/receita5" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}