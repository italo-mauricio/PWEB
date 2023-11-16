import useSWR from 'swr';
import { useState } from 'react';
import styles from '../style/Movies3.module.css';


export function TheForm() {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickHandler(e); // Trigger the onClickHandler when Enter key is pressed
        }
    };

    return (
        <div>
            <form className={styles.searchBar}>
                <label htmlFor="titleSearchString" className={styles.label}>Filtro de Título</label>
                <input
                    id="titleSearchString"
                    name="titleSearchString"
                    type="text"
                    autoComplete="true"
                    className={styles.input}
                    onKeyDown={handleKeyPress} // Call handleKeyPress on key press
                />
            </form>
        </div>
    );
}

export function TheMovies({ data, show }) {
    if (!show || !data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '') return (<div>carregando...</div>)
    if (data.Search.length === 0) return (<div>Nenhum filme encontrado</div>)

    const [sortAsc, setSortAsc] = useState(true);

    const handleSort = () => {
        setSortAsc(!sortAsc);
    }

    const sortedMovies = data.Search.slice().sort((a, b) => {
        if (sortAsc) {
            return a.Title.localeCompare(b.Title);
        } else {
            return b.Title.localeCompare(a.Title);
        }
    });

    return (
        <div>
            <button onClick={handleSort}>Ordenar por Título</button>
            {sortedMovies.map((m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>)}
        </div>
    )
}

export function TheLink({ url, handler }) {
    return (
        <div>
            <a href="/movies3.js" onClick={handler} className={styles.button}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}

export default function Movies33() {
    const [state, setState] = useState({ url: '', titleSearchString: '' });

    const { data, error } = useSWR(state.url, async (u) => {

        if (!state.url || !state.titleSearchString) return { Search: '' };

        if (state.url === '' || state.titleSearchString === '') return { Search: '' };

        const res = await fetch(`${state.url}/?apiKey=6e8073bf&s=${state.titleSearchString}`)

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();

        if (json.Response === "False") {
            error("No movies found.");
        } else {
            return json;
        }

    })

    const onClickHandler = e => {

        e.preventDefault()

        let s = document.getElementById('titleSearchString').value

        if (state.url === '') {
            setState({ url: 'http://www.omdbapi.com', titleSearchString: s })
        }

        else setState({ url: '', titleSearchString: state.titleSearchString })
    }

    return (
        <div className={styles.container}>
            <TheForm />
            <TheLink url={state.url} handler={onClickHandler} />
            <TheMovies data={data ? data : { Search: '' }} show={state.url !== ''} />
        </div>
    )
}