import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <Link href={href} legacyBehavior>
    <a className="text-yellow-100 text-lg md:text-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-gray-500 hover:rounded-lg transition-colors duration-100">
      {text}
    </a>
  </Link>
);

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-black p-4 w-full md:p-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-5 md:space-x-6 md:justify-center text-lg md:text-2xl font-bold">
          <NavLink href="/" text="Home" />
          <NavLink href="/receita1" text="Sobre" />
          <NavLink href="/receita2" text="Agradecimentos" />
        </div>
      </div>
    </nav>
  );
};
