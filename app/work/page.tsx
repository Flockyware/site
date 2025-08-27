import CallingCard from "@/components/callingCard";
import Image from "next/image";
import { Children } from "react";



export default function Work() {
  return (
    <>
      <div className="max-w-4xl w-full mx-auto text-white border-4 rounded-xl  text-3xl">
        <h2 className="text-4xl/normal font-regular ml-5">
          Stuff i've worked on
        </h2>        
        <div className=" border-t-4 border-emerald-500 py-10 grid grid-cols-3">
          <WorkItem>
            shit shit fuck shit
          </WorkItem>

          <WorkItem>
            dick
          </WorkItem>

          <WorkItem></WorkItem>
          <WorkItem></WorkItem>
          <WorkItem></WorkItem>
          <WorkItem></WorkItem>
          <WorkItem></WorkItem>
          <WorkItem></WorkItem>
        </div>
      
      </div>
    </>
  );
}



interface WorkItem{
  year:string
}

function WorkItem(props:any){
  const year: String = "2025"
  return(
    <>
      <div className="border-4 p-2  border-amber-50 rounded-2xl duration-200 my-2  mx-auto hover:scale-103">
        <Image
        className="mb-2 rounded-xl"
        src={"https://picsum.photos/300/200/"}
        width={220}
        height={80}
        alt="Work_image"
        ></Image>
        <div>
          <div className="text-xl/2 font-light">
            Title
          </div>
          <p className="text- font-light">
            {props.children}
          </p>
          <div className="text-sm/5 font-light text-gray-200 ">
            {year}
          </div>
        </div>
        

      </div>
    </>
  );
}