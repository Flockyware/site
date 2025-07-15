
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
        
      <Link className="bg-blue-950 text-amber-50 w-30 h-15 mr-5 rounded-2xl flex justify-center align-text-bottom" href={href}>
        <div className="m-auto">
          {title}
        </div>
      </Link>
       
    </>
  );
}
