'use client'
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
        <h2 className="text-3xl md:text-4xl/normal ml-5 font-light">
          Stuff i&#39;ve worked on
        </h2>        

        <div className="border-t-4 md:overflow-y-scroll md:max-h-120 ">

          <div className="mt-5 text-4xl font-light md:flex mx-auto w-90/100 text-center md:text-left">
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



function WorkItem({ item }: { item: workValue }) {
  


  return (
    <>

      <div className="md:border-4  md:p-3 rounded-xl md:w-92/100 m-auto  ">

        <div className="md:flex">
          <Image
            className="rounded-xl  object-cover  h-[150px]  md:h-[250px] mx-auto"
            src={item.img}
            //src={"https://picsum.photos/600/500/"}
            width={250}
            height={200}
            alt="Work_image"
          />
          <div className=" md:w-full h-min md:ml-8 px-4 md:px-0 mt-2">
            <a  href={item.url} className="flex flex-nowrap hover:text-bavaroa-500 hover:underline duration-300 active:text-bavaroa-800 active:scale-90" target="_blank">{item.title} <ExternalLinkSvg /></a>

            <p className="md:text-xl/snug text-xl/tight font-light mt-3 text-left md:pr-10">
              {addLineBreak(item.desc)}
            </p>

          </div>
        </div>
      </div>
      <hr className=" w-91/100 mx-auto opacity-25 md:my-6 my-3  border-1" />
    </>
  );
}


const addLineBreak = (str: string) =>
  str.split('\n').map((subStr) => {
    
    if(subStr.localeCompare(str.split('\n')[str.split('\n').length-1]) != 0 ){
      return (
      <>
        {subStr}
        <br />
        <br />
      </>
    );
    }else{

      return (
        <>
          {subStr}
          <br />
        </>
      );
    }
  });