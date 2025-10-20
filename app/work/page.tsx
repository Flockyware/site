import Image from "next/image";
import {  Key } from "react";
import { GetGamesWork } from "@/components/workList";
import ExternalLinkSvg from "@/components/externalLink";





export default function Work() {
  
  const _list = GetGamesWork();

  const items = _list.map( (x:workValue) => <WorkItem key={x.id} item={x}></WorkItem> );
  return (
    <>
      <div className=" w-full mx-auto border-4 rounded-xl  text-3xl">
        <h2 className="text-4xl/normal ml-5 font-light">
          Stuff i&#39;ve worked on
        </h2>        

        <div className="border-t-4 py-5">

          <div className=" text-4xl font-light flex justify-center-safe">
            
          </div>

          <div className=" py-5 grid grid-cols-1">
            {/* <WorkItem
              item={
                { 
                  title:"Hellow",
                  subtitle:"hola",
                  year:"2025",
                  url:"https://ncase.me/"
                }
              }
            /> */}
            
            {
              items
            }

            

          </div>
        </div>

      
      </div>
    </>
  );
}



interface workValue{
  id: Key,
  title: string,
  subtitle:string,
  desc: string,
  date:Date,
  url:string
}



function WorkItem({ item }: { item: workValue }){
  


  return(
    <>

      <div className="border-3 p-3 rounded-xl w-92/100 m-auto  ">
          
        <div className="flex">
          
          <Image
            className="rounded-xl"
            src={"https://picsum.photos/600/500/"}
            width={280}
            height={230}
            alt="Work_image"
          />
          <div className=" w-full h-min ml-5 ">
            <a href={item.url} className="flex w-min hover:text-bavaroa-500 hover:underline duration-300 active:text-bavaroa-800 active:scale-90" target="_blank">{item.title} <ExternalLinkSvg className="scale-80"/></a>
            
            <div className="font-normal text-2xl mb-1">{item.subtitle}</div>
            <p className="text-xl font-light  text-justify">
              {addLineBreak(item.desc)}
            </p>
            
          </div>
        </div>
      </div>
    
    </>
  );
}


const addLineBreak = (str: string) =>
  str.split('\n').map((subStr) => {
    
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });