import React, { useState } from 'react';
import styles from '../style/Movies.module.css';
import Link from 'next/link';

export default function Movies({ data }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [moviesData, setMoviesData] = useState(data);
    const [error, setError] = useState(null); // State to hold error messages

    const handleSearchClick = async () => {
        if (searchQuery === "") {
            setSearchQuery('Guardians');
        }

        try {
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e7bc56e7=${searchQuery}`);

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const newData = await res.json();

            if (newData.Response === "False") {
                setError("No movies found.");
            } else {
                setMoviesData(newData);
                setError(null);
            }
        } catch (err) {
            setError("Error loading movie data.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    id="searchInput"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie"
                    className={styles.input}
                />
                <button onClick={handleSearchClick} className={styles.button}>Search</button>
            </div>
            {error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                <div className={styles.moviesGrid}>
                    {moviesData?.Search.map((m) => (
                        <div key={m.imdbID} className={styles.movieItem}>
                            <Link href={`/details?id=${m.imdbID}`}>
                                <img src={m.Poster} alt={`${m.Title} Poster`} />
                            </Link>
                            <div className={styles.title}>
                                {m.Title} --- {m.Year}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


// export async function getServerSideProps(context) {
//     const res = await fetch(`http://www.omdbapi.com/?apikey=6e8073bf&s=sunshine`);
//     const data = await res.json();

//     // if (data.Response === "False") {
//     //     return {
//     //         props: {
//     //             data: null
//     //         }
//     //     };
//     // }

//     return {
//         props: {
//             data,
//         },
//     };
// }