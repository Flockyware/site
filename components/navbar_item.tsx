
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";


interface NavBarItemProps{
    title: String,
    href: Url
}


export default function NavBarItem({title, href}: NavBarItemProps) {
  return (
    <>
        
      <Link className=" text-moon-500 border-2 w-25 h-8 ml-5 rounded-2xl flex justify-center align-text-bottom" href={href}>
        <div className="m-auto underline">
          {title}
        </div>
      </Link>
       
    </>
  );
}
