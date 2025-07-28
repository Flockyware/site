
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
      <div className="text-amber-50  w-25 h-10 ml-0 border-1 rounded-2xl flex justify-center align-text-bottom">

        <Link className="my-auto" href={href}>
          {title}
        </Link>
      </div>

    </>
  );
}
