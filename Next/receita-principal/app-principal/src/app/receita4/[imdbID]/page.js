'use client';

import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const ButtonReturn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
  >
    Voltar
  </button>
);

const MovieDetail = ({ params }) => {
  const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=2517b62d&i=${params.imdbID}`, fetcher);
  const router = useRouter();

  if (error) return <ErrorFallback />;
  if (!data) return <LoadingFallback />;

  const handleReturnClick = () => {
    router.push('/receita4');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col">
        <div className="mt-2 text-2xl">
          <table className="table-auto">
            <tbody>
              <TableRow label="Tittle" value={data.Title} />
              <TableRow label="Released Year" value={data.Year} />
              <TableRow label="Type" value={data.Type} />
              <TableRow label="Movie Time" value={data.Runtime} />
              <TableRow label="Genre" value={data.Genre} />
              <TableRow label="Plot" value={data.Plot} />
            </tbody>
          </table>
          <div className='flex items-center justify-center'>
          <ButtonReturn onClick={handleReturnClick} />
          </div>
        </div>
      </div>
      <img src={data.Poster} alt={data.Title} className="ml-4" />
    </div>
  );
};

const TableRow = ({ label, value }) => (
  <tr>
    <td className="border px-4 py-2">{label}</td>
    <td className="border px-4 py-2">{value}</td>
  </tr>
);

const ErrorFallback = () => <div className="text-center">Falha na requisição...</div>;

const LoadingFallback = () => <div className="text-center">Carregando...</div>;

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default MovieDetail;
