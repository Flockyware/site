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
            desc:"a point-and-click game i participated in the global game jam. \nIt's far from perfect but i'm happy i was able to participate in a gamejam with so many talented creators",
            date: new Date("2025-02-05"),
            url:"https://globalgamejam.org/games/2025/burbujelia-2"

        },
        // {
        //     id: 1,
        //     title:"Burbujelia",
        //     subtitle:"Godot Engine, Github",
        //     img:"/image-bbj.webp",
        //     desc:"This is the first game i submit with a group, and also first game i submit to a jam. \nIt's far from perfect but im happy i was able to participate in a gamejam with so many talented creators",
        //     date: new Date("2025-02-05"),
        //     url:"https://globalgamejam.org/games/2025/burbujelia-2"

        // },

    ]

    return _list;

}