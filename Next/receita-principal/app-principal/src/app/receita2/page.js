import Contato from './components/contatos';
import { Tabela } from './components/tabela';

export default function Principal(){

    return (
 
       <div className="flex flex-col justify-center items-center">
 
          <h1 className='text-gray-400 font-bold text-4xl'>Nova Página</h1>
            
          <MariaPrea/>
          <Tabela/>
          <Contato/>
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2 className='text-violet-500 font-bold text-4xl'>Morreu Maria Preá...</h2>
    
    )
    
}