import CallingCard from "@/components/callingCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" mx-auto  border-4 rounded-xl  text-3xl ">
          
        <div className="flex ">
          <h2 className="text-4xl/normal ml-5 font-light">
            About Me
          </h2>
        </div>

        <div className="  border-t-4   ">
          
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