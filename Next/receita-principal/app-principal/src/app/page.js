import Link from 'next/link'

export default function Home() {
    return (

      <main className="container mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-6">Projetos Recentes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Projeto 1 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 1111</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 1.</p>
          <Link href="/receita1">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 2 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 2</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 2.</p>
          <Link href="/receita2">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 3 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 3</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 3.</p>
          <Link href="/receita3">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
             Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 4 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 4</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 4.</p>
          <Link href="/receita4">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 5 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 5</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 5.</p>
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
          <Link href="/receita7">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
              Ver Mais
            </div>
          </Link>
        </div>

        {/* Projeto 8 */}
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 8</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 8.</p>
          <Link href="/receita8">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
               Ver Mais
            </div>
          </Link>
        </div>
                {/* Projeto 3 */}
                <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-3xl font-semibold mb-2">Receita 3</h2>
          <p className="text-gray-600 text-2xl font-bold mb-4">Descrição breve do projeto 3.</p>
          <Link href="/receita3">
            <div className="mt-4 block bg-gradient-to-r from-black hover:via-gray-800 to-black text-yellow-100 font-bold text-2xl py-2 px-4 rounded">
               Ver Mais
            </div>
          </Link>
        </div>
      </div>
    </main>

    );
}
