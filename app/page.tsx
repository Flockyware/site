import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-opacity-50 border-1 border-emerald-400 max-w-4xl mx-auto ">


        <div className="text-white border-amber-300 border-0 flex mt-3 " >


          <div className="ml-5 max-w-120 border-0 mt-15">

            <div className=" justify-center">
              <h1 className="text-7xl">
                Hi! 
              </h1>
              <h1 className="text-7xl">
                I'm Flocky
              </h1>
            </div>

            <div className=" border-0 text-2xl font-light">
              Welcome to my site, 
            </div>
            

          </div>

          <div className="ml-auto">
            <Image className=" "
              src={"https://picsum.photos/id/1/300/300"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
        </div>

      </div>
      {/*       
      <div className="bg-moon-500 rounded-t-3xl  h-4 mt-8">

      </div> */}
    </>
  );
}
