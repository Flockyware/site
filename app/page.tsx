'use client'
import { GlobalContext } from "@/components/globalContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {

  const global = useContext(GlobalContext)
  return (
    <>
      <div className="   my-auto">


        <div className="flex mt-3 " >


          <div className="ml-5 max-w-120 border-0 mt-15">

            <div className=" justify-center items-center">
              
              <h1 className="text-primary/25 w-full">
                Hi! I&lsquo;m Flocky
              </h1>

              <div className="text-secondary items-center-safe text-center border-0 py-auto flex py-auto">
                <div className="border-0">
                  I enjoy making
                </div>
                <span className="ml-2 animate-rainbow-effect border-0 flex"> stuff </span> <span className="ml-2 animate-rainbow-effect duration-200 hover:text-7xl hover:translate-y-0.5">❤</span>  {/*❤*/}   
              </div>

            </div>




          </div>

          <div className="ml-auto border-0">
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
