'use client'
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavBarItemProps{
    title: string,
    href: Url
}


export default function NavBarItem({title, href}: NavBarItemProps) {

  const pathname:string = usePathname().toString();
  return (
    <>
      <div className=" w-auto h-min mx-1.5 md:ml-5 md:text-navbar-opt text-[1.4rem] font-light border-0 flex justify-center align-text-bottom hover:scale-105 duration-250 active:scale-90">


        {
         (pathname == href.toString()) ?
         <Link className="my-auto text-bavaroa-500 underline" href={href} > {title} </Link> 
         : 
          <Link className="my-auto " href={href}>{title}</Link>
        }

      </div>

    </>
  );
}
