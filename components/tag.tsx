'use client'
import React, { useContext} from "react";
import useSound from "use-sound";
import { GlobalContext } from "./globalContext";


export default function Tag({text,children=null}: {text:string,  children:React.ReactNode}) {

    const global = useContext(GlobalContext)
    const [playHover] = useSound('/sfx/multimedia_button_click_007.mp3',{
        playbackRate:global?.pitchRate, 
        volume:0.90, 
        soundEnabled:global?.soundEnable,
        interrupt: true
    });
    const handlePitch = () => {
        playHover(); 
        global?.setPitchRate(global.pitchRate+0.05);
        const temp = global; 

        if((temp?.pitchRate!=null) &&(temp.pitchRate>1.05) ){
            global?.setPitchRate(0.45);
        }
        console.log(global?.pitchRate);

    }
 
  return (
   <>
    <div className="flex border-2 rounded-lg py-1 px-1.5 text-lg bg-white dark:bg-slate-900 shadow-xl/10 hover:shadow-xl/5 m-1 hover:translate-y-[2px] duration-150"
        onMouseEnter={()=>{
            handlePitch();
        }}
    >
        {children}
        {(children?.valueOf()===null)?(
            "&nbsp;"
        ):(
            ""
        )
        }
        {text}
    </div>
   </>
  );
}

