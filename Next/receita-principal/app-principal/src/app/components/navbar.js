import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <div className="text-yellow-100 text-4xl px-4 py-2 hover:bg-red-600 hover:rounded-lg transition-colors duration-100">
      {text}
    </div>
  </Link>
);

export function Navbar(){
  return (
    <nav className="bg-red-800 bg-opacity-700 w-full p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="hidden md:flex space-x-5 text-3xl font-bold">
        <div className="border-r border-red-400 h-14"></div>
          <NavLink href="/receita1" text="Receita 1" />
          <div className="border-r border-red-400 h-14"></div>
          <NavLink href="/receita2" text="Receita 2" />
          <div className="border-r border-red-400 h-14"></div>
          <NavLink href="/cardlist" text="Survivors" />
          <div className="border-r border-red-400 h-14"></div>
        </div>
      </div>
    </nav>
  );
};