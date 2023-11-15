import NovaPagina from './novaPagina';
import Contatos from './contatos';
import styles from '../styles/home.module.css';


export default function Home(){
    return (
        <div className={styles.container}>
            <h1>Página Inicial</h1>
            <NovaPagina />
            <Contatos />
        </div>
    );
}



