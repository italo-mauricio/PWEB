import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Movies2() {
    const { data, error } = useSWR(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e7bc56e7=brasil`,
        fetcher
    );

    if (error) return <div>falha na requisição...</div>;
    if (!data) return <div>carregando...</div>;

    return (
        <div>
            {data.Search.map((m) => (
                <MovieLink key={m.imdbID} movie={m} />
            ))}
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie }) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: '/details',
            query: { id: movie.imdbID }
        });
    };

    return (
        <div>
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                {movie.Title} --- {movie.Year}
            </div>
        </div>
    );
}