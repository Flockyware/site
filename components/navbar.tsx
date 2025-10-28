
"use client";
import NavBarItem from "./navbar_item";
import MuteButton from "./muteButton";
import DarkMode from "./darkmodebutton";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>

      <div className="flex border-0 items-center-safe justify-end  h-auto md:mb-5 mt-2 md:mt-3 w-full" >
        <div className="flex md:min-w-30 border-0 mr-auto felx ">
          
          <DarkMode/>
          <MuteButton/>
        </div>
        <div className="hidden md:flex">
          <NavBarItem href={"/"} title={"Home"}></NavBarItem>
          <NavBarItem href={"/about"} title={"About"}></NavBarItem>
          <NavBarItem href={"/work"} title={"Work"}></NavBarItem>
          <NavBarItem href={"/contact"} title={"Contact"}></NavBarItem>
        </div>
        <div className="justify-center mr-2 md:hidden hover:scale-95 duration-200 active:scale-80">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>


      </div>
      {isOpen?<MobileNavbar/>:<></>}
      
      
    </>
  );
}

const MobileNavbar = ()=>{

  return(
    <>
      <div className="bg-gray-400 md:hidden ">
        <ItemMobile href={"/"} title={"Home"}/>
        <ItemMobile href={"/about"} title={"About"}/>
        <ItemMobile href={"/work"} title={"Work"}/>
        <ItemMobile href={"/contact"} title={"Contact"}/>
      </div>
    </>
  );
}

const ItemMobile:React.FC<MobileProps> = ({href, title})=>{

  const pathname:string = usePathname().toString();

  if (pathname == href.toString()) {
    return (
      <div className="text-center bg-bavaroa-500 active:scale-x-95 active:duration-200">
        <Link className="my-auto  text-lighty-500 text-xl " href={href} > {title} </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="text-center active:scale-85 duration-200 bg-lighty-500 dark:bg-darky-500">
          <Link className="my-auto text-xl" href={href}>{title}</Link>
        </div>

      </>
    );
  }
  
}

interface MobileProps {

  title: string;
  href:string;

}