import Contatos from "./contatos";
import { Tabela } from "./tabela";



export default function Principal(){

    let name = 'Skol';
    let mark = 'Redonda';
    return (
 
       <div>
 
          <h1>Nova Página</h1>
            
          <MariaPrea />
          <Tabela nome={name} marca={mark}/>
          <Contatos/>
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2>Morreu Maria Preá...</h2>
    
    )
    
}