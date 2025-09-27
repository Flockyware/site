import { Key } from "react";


interface workValue{
    id: Key,
  title: String,
  subtitle:String,
  desc:string,
  date:Date,
  url:String
}

export function GetGamesWork(){
    const _list:workValue[] = 
    [
        {
            id: 1,
            title:"Burbujelia",
            subtitle:"GGJ",
            desc:"this is the first game i submit with a group, also first game i submit to a jam lmao <br/> its far fromm perfect but im happy i was able to participate to the GGJ",
            date: new Date("2025-02-05"),
            url:"https://globalgamejam.org/games/2025/burbujelia-2"

        }

    ]

    return _list;

}