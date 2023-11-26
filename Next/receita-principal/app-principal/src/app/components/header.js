import { Logo } from "./logo";
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white">
      <div className="flex justify-start flex-row">
        <Logo />
      </div>
      <div className="flex justify-center flex-row items-center">
        <h1 className="text-4xl md:text-5xl font-bold pl-2 md:pl-4 py-4">Receitas Programação Web</h1>
      </div>
    </header>
  );
}
