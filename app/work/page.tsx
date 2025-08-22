import CallingCard from "@/components/callingCard";
import Image from "next/image";
import { Children } from "react";



export default function Work() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-white border-0  text-3xl">
        <h2 className="text-4xl/normal font-regular">
          Work
        </h2>        
        <div className="grid grid-cols-3">
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
      <div className="border-2 p-2  border-blue-600 rounded-2xl duration-200 my-2  mx-auto hover:scale-105">
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