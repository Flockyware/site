import { Key } from "react";


interface workValue{
    id: Key,
  title: string,
  subtitle:string,
  img:string,
  desc:string,
  date:Date,
  url:string
}

export function GetGamesWork(){
    const _list:workValue[] = 
    [
        {
            id: 1,
            title:"Burbujelia",
            subtitle:"Godot Engine, Github",
            img:"/image-bbj.webp",
            desc:"A point-and-click game which i collaborated for submitting in global game jam. \nIt's far from perfect but i'm happy i was able to participate in a gamejam with so many talented creators",
            date: new Date("2025-02-05"),
            url:"https://globalgamejam.org/games/2025/burbujelia-2"

        },
        {
            id: 2,
            title:"This Website!",
            subtitle:"Next.js, React, other frontend stuff",
            img:"/website.webp",
            desc:"this website was made using Next.js and much love and effort, i learned a lot making it and im happy with the result",
            date: new Date("2025-31-10"),
            url:"/"

        },

    ]

    return _list;

}