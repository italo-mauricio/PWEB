import { Logo } from "./logo";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white flex justify-between items-center">
      <div className="flex justify-start flex-row items-center">
        <Logo />
        <h1 className="text-4xl md:text-5xl font-bold pl-2 md:pl-4 py-4">Receitas PWEB</h1>
      </div>
    </header>
  );
}
