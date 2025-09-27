
"use client";
import Image from "next/image";
import NavBarItem from "./navbar_item";
import Link from "next/link";

export default function NavBar() {
  return (
    <>

      <div className="flex items-center-safe justify-end border-0  h-auto my-5 w-full" >

        <NavBarItem href={"/"} title={"Home"}></NavBarItem>
        <NavBarItem href={"/about"} title={"About"}></NavBarItem>
        <NavBarItem href={"/work"} title={"Work"}></NavBarItem>
        <NavBarItem href={"/contact"} title={"Contact"}></NavBarItem>

      </div>
      
    </>
  );
}
