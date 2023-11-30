"use client";
import Link from "next/link";
import useSWR from "swr";

export default function Movies2() {
  const { data, error } = useSWR(
    `https://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=bagdad`,
    fetcher
  );

  if (error) return <div>Falha na requisição...</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.Search.map((m) => (
          <div key={m.imdbID}>
            <Link href={`/receita4/${m.imdbID}`}>
              <div className="text-center">
                <img src={m.Poster} alt={m.Title} className="mb-2" />
                <h2 className="text-lg">{m.Title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}


