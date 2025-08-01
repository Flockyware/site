'use client'
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavBarItemProps{
    title: String,
    href: Url
}


export default function NavBarItem({title, href}: NavBarItemProps) {

  const pathname:string = usePathname().toString();

  console.log()

  return (
    <>
      <div className="text-amber-50  w-auto h-10 ml-5 text-3xl font-light border-0 flex justify-center align-text-bottom">


        {
         (pathname == href.toString()) ?<Link className="my-auto text-bavaroa-500" href={href}>{title}</Link> : <Link className="my-auto" href={href}>{title}</Link>
        }

      </div>

    </>
  );
}
