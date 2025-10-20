import { Key } from "react";


interface workValue{
    id: Key,
  title: string,
  subtitle:string,
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
            desc:"This is the first game i submit with a group, also first game i submit to a jam (lmao). \n It's far from perfect but im happy i was able to participate in a gamejam with so many good creators",
            date: new Date("2025-02-05"),
            url:"https://globalgamejam.org/games/2025/burbujelia-2"

        }

    ]

    return _list;

}