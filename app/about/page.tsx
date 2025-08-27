import CallingCard from "@/components/callingCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-white border-4 rounded-xl  text-3xl ">
          
        <div className="flex ">
          <h2 className="text-4xl/normal font-regular border-2 border-amber-900 ">
            About me
          </h2>
        </div>

        <div className="bg-panel-trans  border-t-4   ">
          
          <CallingCard />
          
          <div className="my-10">

            <p className="">
              Im flocky, i dedicate to mostly to software and game development, i love the problem solving and learning how to do something or how something is done 
            </p>

            <p className="">
              I live in Venezuela, as a graduated in Software Development and im tryng to make the most  
            </p>

            <p className="">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>

        </div> 
      </div>
    </>
  );
}