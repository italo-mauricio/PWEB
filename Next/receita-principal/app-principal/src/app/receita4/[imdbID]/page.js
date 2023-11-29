"use client";
import useSWR from "swr"

export default function MovieDetail({params}) {


  const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=2517b62d&i=${params.imdbID}`, fetcher) 

  if (error) return <div>Falha na requisição...</div>
  if (!data) return <div>Carregando...</div>

  const handleReturnClick = () => {
    router.push("/receita4/")
  }

  const ButtonReturn = ({ onClick }) => {
    return <button onClick={onClick}>Voltar</button>
  }

  return (
    <div>
      <ButtonReturn onClick={handleReturnClick} />
      <img src={data.Poster} alt={data.Title} />
      <h2>Title: {data.Title}</h2>
      <ul>
        <li>
          <p>Released Year: {data.Year}</p>
        </li>
        <li>
          <p>Type: {data.Type}</p>
        </li>
        <li>
          <p>Movie Time: {data.Runtime}</p>
        </li>
        <li>
          <p>Genre: {data.Genre}</p>
        </li>
        <li>
          <p>Plot: {data.Plot}</p>
        </li>
      </ul>
    </div>
  )
}


async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}