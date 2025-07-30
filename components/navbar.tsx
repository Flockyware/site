
"use client";
import Image from "next/image";
import NavBarItem from "./navbar_item";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
    <div className="flex justify-end max-w-4xl mx-auto mt-5" >

        <NavBarItem href={"/"} title={"Home"}></NavBarItem>
        <NavBarItem href={"/"} title={"About"}></NavBarItem>
        <NavBarItem href={"/"} title={"Work"}></NavBarItem>
        <NavBarItem href={"/"} title={"Links"}></NavBarItem>




    </div>
    </>
  );
}
