import Image from "next/image";
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden mr-2">
          <Image
            src="/logo2.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold py-4">NextJS</h1>
      </div>
    </Link>
  );
}
