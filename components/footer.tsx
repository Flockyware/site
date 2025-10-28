"use client";

import { FaBluesky } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";



export default function Footer() {

  const iconClasses: string = "size-10  m-auto  hover:scale-110 duration-250 active:scale-90 duration-200"

  return (

    <div className="justify-center w-full py-6  ">

      <div className="flex text-3xl font-light  justify-center-safe ">
        {"My socials"}
      </div>

      <div className=" justify-center-safe mt-2  ">

        <div className="flex md:w-1/3 mx-auto ">
          <a href="https://github.com/Flockyware" className={iconClasses} target="_blank">
            <IoLogoGithub className={iconClasses} />
          </a>

          <a href="https://bsky.app/profile/flockyware.bsky.social" className={iconClasses} target="_blank">
            <FaBluesky className={iconClasses} />
          </a>

          <a href="https://www.youtube.com/@Flokyware" className={iconClasses} target="_blank">
            <FaYoutube className={iconClasses} />
          </a>

          <a href="https://flockyware.itch.io/" className={iconClasses} target="_blank">
            <FaItchIo className={iconClasses} />
          </a>
        </div>

      </div>
    </div>

  );
}

