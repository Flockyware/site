import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-opacity-50  border-0 border-red-500 my-auto">


        <div className="text-white border-amber-300 border-0 flex mt-3 " >


          <div className="ml-5 max-w-120 border-0 mt-15">

            <div className=" justify-center items-center">
              
              <h1 className="text-primary/25 w-full">
                Hi! I'm Flocky
              </h1>

              <h1 className="text-secondary items-center-safe text-center border-0 py-auto flex">
                I enjoy making <span className="ml-2 animate-rainbow-effect border-0 flex"> stuff <span className="duration-200 hover:text-7xl border-0">❤</span></span>   
              </h1>

            </div>


            

          </div>

          <div className="ml-auto">
            <Image className=" "
              // unoptimized = {true}
              src={"https://picsum.photos/300"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
        </div>

      </div>

    </>
  );
}
