"use client";
import Image from "next/image";
import NavBarItem from "./navbar_item";
import Link from "next/link";
import { Children } from "react";


// @ts-ignore <FontAwesomeIcon icon="fa-brands fa-youtube" />


export default function Footer( {children:Element}) {
  return (

    <div className=" justify-center  w-full mt-auto">

      <div className="mx-auto text-center text-lg font-thin text-white border-1 ">
        
        {Element}
      </div>
      
    </div>

  );
}
