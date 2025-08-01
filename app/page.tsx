import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-indigo-900 bg-opacity-50 border-0 border-emerald-400 max-w-4xl mx-auto ">


        <div className="text-white border-amber-300 border-1 flex mt-3 " >


          <div className="ml-5 w-80 border-0 mt-15">

            <div className=" justify-center">
              <span className=" text-7xl">
                Hi!
              </span>

              <span className="ml-5 text-7xl">
                I'm NAME
              </span>
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
