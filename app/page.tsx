import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-opacity-50  max-w-4xl mx-auto border-4 border-emerald-200">


        <div className="text-white border-amber-300 border-0 flex mt-3 " >


          <div className="ml-5 max-w-120 border-0 mt-15">

            <div className=" justify-center">
              <h1 className="text-primary/25">
                Hi! I'm Flocky
              </h1>
              <h1 className="text-secondary">
                I enjoy making <span className="animate-rainbow-effect">stuff</span> <span className="animate-rainbow-effect duration-200 hover:text-7xl">❤</span> 
              </h1>
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

    </>
  );
}
