'use client'
import { BigHeart } from "@/components/bigHeart";
import { GlobalContext } from "@/components/globalContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {

  const global = useContext(GlobalContext)
  return (
    <>
      <div className="my-auto">


        <div className="md:flex mt-3 " >


          <div className="  border-0 mt-15">

            <div className=" justify-center items-center">
              
              <h1 className="md:text-primary/25 w-full text-center md:text-left text-5xl">
                Hi! I&lsquo;m Flocky
              </h1>

              <div className="flex-inline  items-center  mx-auto text-center md:text-left text-2xl md:text-secondary">  
                I enjoy making
                <span className="ml-2 animate-rainbow-effect "> stuff </span>
                <BigHeart/>
              </div>
            </div>




          </div>

          <div className="md:ml-auto mx-auto h-[75%] w-[75%] md:h-auto md:w-auto">
            {(global?.isDark === true) ? (
              <Image className="dog"
                unoptimized={true}
                src={"/image-frontpage-v2-darkmode.gif"}
                //src={"https://picsum.photos/300"}
                width={400}
                height={400}
                alt="placeholder"
              />
            ) : (
              <Image className="dog"
                unoptimized={true}
                src={"/image-frontpage-v2.gif"}
                //src={"https://picsum.photos/300"}
                width={400}
                height={400}
                alt="placeholder"
              />
            )}


          </div>
        </div>

      </div>

    </>
  );
}

