import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <div className="text-yellow-100 text-lg md:text-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-red-600 hover:rounded-lg transition-colors duration-100">
      {text}
    </div>
  </Link>
);

export function Navbar() {
  return (
    <nav className="bg-red-800 bg-opacity-700 w-full p-3 md:p-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-5 md:space-x-6 md:justify-center text-lg md:text-2xl font-bold">
            <NavLink href="/" text="Home" />
          <NavLink href="/receita1" text="Receita 1" />
          <NavLink href="/receita2" text="Receita 2" />
          <NavLink href="/cardlist" text="Survivors" />
        </div>
      </div>
    </nav>
  );
};
