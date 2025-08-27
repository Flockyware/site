"use client";
import Image from "next/image";
import NavBarItem from "./navbar_item";
import Link from "next/link";
import { Children } from "react";
import { FaBluesky } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";

// @ts-ignore <FontAwesomeIcon icon="fa-brands fa-youtube" />


export default function Footer() {

  const iconClasses: string = "size-9 border-0 m-auto min hover:scale-112 duration-200"

  return (

    <div className="justify-center w-full border-4 py-6 border-blue-800">

      <div className="flex text-3xl font-light border-0 justify-center-safe ">
        {"My socials"}
      </div>

      <div className=" justify-center-safe mt-2 border-4 border-amber-300">

        <div className="flex w-1/3 mx-auto">
          <a href="https://github.com/Flockyware" className={iconClasses} target="_blank">
            <IoLogoGithub className={iconClasses} />
          </a>

          <a href="https://github.com/Flockyware" className={iconClasses} target="_blank">
            <FaBluesky className={iconClasses} />
          </a>

          <a href="https://github.com/Flockyware" className={iconClasses} target="_blank">
            <FaYoutube className={iconClasses} />
          </a>

          <a href="https://github.com/Flockyware" className={iconClasses} target="_blank">
            <FaItchIo className={iconClasses} />
          </a>
        </div>

      </div>
    </div>

  );
}

