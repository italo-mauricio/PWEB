import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gradient-to-r from-black via-gray-800 to-black text-white p-8 text-center text-2xl">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4">
      <div className="mb-4 flex items-center justify-center">
          <span className="mr-2">Developed by:</span>
          <span className="mx-4">|</span> 
          <Link href="https://github.com/italo-mauricio" target='_blank'>
            <p className="flex items-center hover:text-gray-300">
              <span className="ml-2">italo-mauricio</span>
            </p>
          </Link>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <span className="mr-2">Powered By:</span>
          <span className="mx-4">|</span>
          <Link href="https://nextjs.org/docs" target='_blank'>
            <p className="flex items-center hover:text-gray-300">
              <span className="ml-2">Next JS</span>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
