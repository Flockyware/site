import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-emerald-50 border-amber-300 border-4 my-10 mx-auto  w-100 hover:animate-wiggle  " >
        
        
        <span className="w-52">
          <div className=" justify-center">
            <span className="font-bold text-5xl text ">
              Hi!
            </span>

            <span className="ml-5 text-5xl">
              I'm Robert
            </span>
          </div>

          <div className=" border-2 ">
            Game Developer 🕹
          </div>
        </span>

        

      </div>
    </>
  );
}
