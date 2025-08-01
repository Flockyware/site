
"use client";
import Image from "next/image";
import NavBarItem from "./navbar_item";
import Link from "next/link";

export default function NavBar() {
  return (
    <>


      <div className="flex justify-end max-w-4xl mx-auto mt-5 mb-10  border-1 " >
        
        {/* <div className="bg-red-600 flex w-2 mr-auto ">

        </div> */}

        <NavBarItem href={"/"} title={"Home"}></NavBarItem>
        <NavBarItem href={"/about"} title={"About"}></NavBarItem>
        <NavBarItem href={"/work"} title={"Work"}></NavBarItem>
        <NavBarItem href={"/contact"} title={"Contact"}></NavBarItem>

      </div>
    </>
  );
}
