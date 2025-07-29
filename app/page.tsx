import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white border-amber-300 border-0  flex mt-3 " >
        
        
        <div className="ml-5 w-80 border-0 ">
          
          <div className=" justify-center">
            <span className=" text-5xl text ">
              Hi!
            </span>

            <span className="ml-5 text-5xl">
              I'm Flocky
            </span>
          </div>

          <div className=" border-0 ">
            Game Developer 🕹
          </div>

        </div>

        <div className="ml-auto">
          <Image className=" " 
            src={"https://picsum.photos/id/1/200/200"} 
            width={200} 
            height={200} 
            alt="placeholder"
          />
        </div>
        
      </div>

{/*       
      <div className="bg-moon-500 rounded-t-3xl  h-4 mt-8">

      </div> */}
    </>
  );
}
