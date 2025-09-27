import CallingCard from "@/components/callingCard";
import Image from "next/image";
import { title } from "process";
import { Children, Key } from "react";
import { GetGamesWork } from "@/components/workList";





export default function Work() {
  
  const _list:any = GetGamesWork();

  const items = _list.map( (x:workValue) => <WorkItem key={x.id} item={x}></WorkItem> );
  return (
    <>
      <div className=" w-full mx-auto border-4 rounded-xl  text-3xl">
        <h2 className="text-4xl/normal ml-5 font-light">
          Stuff i've worked on
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
  title: String,
  subtitle:String,
  desc: string,
  date:Date,
  url:String
}

function WorkList( _list:workValue[] ){

  const work:any = []
  return(
    { work}
  );
}

function WorkItem({ item }: { item: workValue }){
  


  return(
    <>

      <div className="border-2 p-3 hover:border-bavaroa-500  duration-150 hover:border-2 active:scale-90  rounded-xl    w-92/100 m-auto  ">
          {/*@ts-ignore*/}
        <a href={item.url} className="flex " target="_blank">
          <Image
            className="rounded-xl"
            src={"https://picsum.photos/600/500/"}
            width={280}
            height={230}
            alt="Work_image"
          />
          <div className="border-0 w-full h-min ml-5 ">
            <p>{item.title} </p>
            {/* {item.date.getFullYear()} */}
            <div>{item.subtitle}</div>
            <p className="work-p">
              {item.desc}
            </p>
            
          </div>
        </a>
      </div>
    
    </>
  );
}


