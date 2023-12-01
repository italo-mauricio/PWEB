import Link from 'next/link'

export default function Home() {
    return (

      <main className="container mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-6">Projetos Recentes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Projeto 1 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 1</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">A receita orienta sobre a criação de um projeto Node.js, a instalação do Next.js, a configuração de scripts no arquivo package.json e a criação de páginas. Ao final, o usuário pode iniciar o servidor web e visualizar a página criada. O texto também fornece exercícios adicionais para explorar mais funcionalidades do Next.js. </p>
          <Link href="/receita1">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 2 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 2</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Após criar uma nova página chamada novaPagina.js no diretório pages, a receita explora a criação de funções exportadas, diferenciando entre páginas associadas a rotas e componentes que não estão associados diretamente a uma rota. Um exemplo prático é dado, onde uma função de componente chamada MariaPrea é criada e incorporada à função da página Principal.</p>
          <Link href="/receita2">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 3 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 3</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Essas instruções guiam a criação de uma página em Next.js que interage com um sistema externo via API para exibir informações sobre filmes. O principal foco é na utilização de getServerSideProps para buscar dados no servidor antes de renderizar a página e no uso de fetch para interagir com uma API externa.</p>
          <Link href="/receita3">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
             Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 4 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 4</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Nesta receita, desenvolvi uma aplicação web interativa que se comunica com um sistema externo usando NextJS, SWR, React Hooks e outras tecnologias. Ao contrário de abordagens anteriores, a interação com o sistema externo acontece no lado do cliente, no navegador. Essa comunicação ocorre via requisições HTTP, recebendo respostas formatadas em JSON.</p>
          <Link href="/receita4">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 5 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 5</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Esta receita tem como objetivo criar uma página web simples que exibe um link inicialmente denominado "Mostrar". Quando o link é clicado, a página muda para "Ocultar" e exibe os resultados de uma consulta a um sistema externo. Os principais termos técnicos incluem NextJS, SWR, useState(), React hook, fetch, async, await, JavaScript e HTML</p>
          <Link href="/receita5">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 6 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 6</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 6.</p>
          <Link href="/receita6">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 7 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 7</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 7.</p>
          <Link href="/">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 8 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 8</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 8.</p>
          <Link href="/">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
               Ver Mais
            </div>
          </Link>
        </div>
                {/* Projeto 3 */}
                <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 3</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 3.</p>
          <Link href="/">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
               Ver Mais
            </div>
          </Link>
        </div>
      </div>
    </main>

    );
    
}

