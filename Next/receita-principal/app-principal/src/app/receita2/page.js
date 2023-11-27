import Contato from './contatos';
import { Tabela } from './tabela';

export default function Principal(){

    let name = 'Skol';
    let mark = 'Redonda';
    return (
 
       <div className="flex flex-col justify-center items-center">
 
          <h1 className='text-gray-400 font-bold text-4xl'>Nova Página</h1>
            
          <MariaPrea/>
          <Tabela nome={name} marca={mark}/>
          <Contato />
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2 className='text-violet-500 font-bold text-4xl'>Morreu Maria Preá...</h2>
    
    )
    
}