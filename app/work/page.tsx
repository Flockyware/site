import Image from "next/image";
import {  Key } from "react";
import { GetGamesWork } from "@/components/workList";
import ExternalLinkSvg from "@/components/svg/externalLink";
import React from "react";





export default function Work() {
  
  const _list = GetGamesWork();

  const items = _list.map( (x:workValue) => <WorkItem key={x.id} item={x}></WorkItem> );
  return (
    <>
      <div className=" w-full mx-auto border-4  rounded-xl text-3xl ">
        <h2 className="text-4xl/normal ml-5 font-light">
          Stuff i&#39;ve worked on
        </h2>        

        <div className="border-t-4 overflow-y-scroll max-h-120 ">

          <div className="mt-5 text-4xl font-light flex mx-auto w-90/100">
            Games
          </div>

          <div className="py-5  grid grid-cols-1">

            {items}

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
  img:string,
  desc: string,
  date:Date,
  url:string
}



function WorkItem({ item }: { item: workValue }){
  


  return(
    <>

      <div className="border-4  p-3 rounded-xl w-92/100 m-auto  ">
          
        <div className="flex">
          <Image
              className="rounded-xl  object-cover"
              src={item.img}
              //src={"https://picsum.photos/600/500/"}
              width={250}
              height={150}
              alt="Work_image"
          />
          <div className=" w-full h-min ml-8 ">
            <a href={item.url} className="flex w-min hover:text-bavaroa-500 hover:underline duration-300 active:text-bavaroa-800 active:scale-90" target="_blank">{item.title} <ExternalLinkSvg/></a>
            
            <p className="text-xl/snug font-light mt-3 text-justify pr-20">
              {addLineBreak(item.desc)}
            </p>
            
          </div>
        </div>
      </div>
      <hr className=" w-91/100 mx-auto opacity-25 my-6  border-1"/>

    </>
  );
}


const addLineBreak = (str: string) =>
  str.split('\n').map((subStr, index) => {
    
    <React.Fragment key={index}/>
    return (
      <>
        {subStr}
        <br />
        <br />

      </>
    );
  });