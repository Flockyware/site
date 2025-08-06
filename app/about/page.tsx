import CallingCard from "@/components/callingCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-white mt-6 text-3xl">
                  <h2 className="text-5xl/normal mb-5 font-regular">
            About me
          </h2>

        <div className="bg-panel-trans border-2 p-4 rounded-md">          
          
          <div className="border-4 flex justify-center ">
            <CallingCard/>
          </div>
      
          
          <p className="text-xl/normal font-light">

            Im a independent software and game developer,
            Most of my projects have been made using Unity or Godot Engine

          </p>

          <hr />

          <p className="text-xl/normal font-light">
            If you're interested in working with me, feel fre to contactme at INSERTED-EMAIL
          </p>

        </div> 
      </div>
    </>
  );
}