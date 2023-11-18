
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '../style/Details.module.css';


const fetcher = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export default function Details() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=e7bc56e7=${id}`;
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>Error loading movie data...</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.Title}</h1>
            <img src={data.Poster} alt={data.Title} className={styles.poster} />
            <div className={styles.content}>0
                <p>{data.Plot}</p>
                <p>Year: {data.Year}</p>
                <p>Director: {data.Director}</p>
            </div>
        </div>
    );
}