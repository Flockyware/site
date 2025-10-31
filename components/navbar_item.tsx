'use client'
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import useSound from "use-sound";
import { GlobalContext } from "./globalContext";


interface NavBarItemProps{
    title: string,
    href: Url
}


export default function NavBarItem({title, href}: NavBarItemProps) {
  const global = useContext(GlobalContext);
  const [sound] = useSound('/sfx/button_pressed_2.mp3', {
    playbackRate: 0.7,
    volume: 0.70,
    soundEnabled: global?.soundEnable,
    interrupt: true
  });
  const pathname:string = usePathname().toString();
  return (
    <>
      <div className=" w-auto h-min mx-1.5 md:ml-5 md:text-navbar-opt text-[1.4rem] font-light border-0 flex justify-center align-text-bottom hover:scale-105 duration-250 active:scale-90">


        {
         (pathname == href.toString()) ?
         <Link className="my-auto text-bavaroa-500 underline" href={href} onClick={()=>sound()} > {title} </Link> 
         : 
          <Link className="my-auto " href={href} onClick={()=>sound()}>{title}</Link>
        }

      </div>

    </>
  );
}
