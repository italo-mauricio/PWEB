import Image from "next/image";
import Link from 'next/link';



export function Logo(){
    return (
        <Link href="/">
        <div className="rounded-full overflow-hidden mr-0">
          <Image
            src="/logo2.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </Link>
    )
}