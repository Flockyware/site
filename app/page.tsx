import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-emerald-50 border-amber-300 flex border-2 my-10  " >
        
        
        <div className="w-80 border-2 ">
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
        </div>

        <div className="ml-auto">

          <Image className=" " src={"https://picsum.photos/id/1/300/300"} width={300} height={300} alt="placeholder"></Image>
        </div>

      </div>
    </>
  );
}
