'use client'

import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useSound from "use-sound";
import { GlobalContext } from "./globalContext";
import SunSvg from "./svg/sunSvg";
import MoonSvg from "./svg/moonSvg";





export default function DarkMode() {

    const global = useContext(GlobalContext)
    const [playDown] = useSound('/sfx/button_click_004_down.mp3',{volume:0.95, soundEnabled:global?.soundEnable});
    const [playUp] = useSound('/sfx/button_click_004_up.mp3',{volume:0.95, soundEnabled:global?.soundEnable});

 

    return (
        <>
            <div className="flex mr-3 md:mr-auto ml-3 md:ml-0">
                <button
                    onClick={() => global?.setIsDark(!global.isDark)}
                    onMouseDown={() => playDown()}
                    onMouseUp={() => playUp()}
                >
                    {(global?.isDark == false) ? (
                        <MoonSvg className="hover:scale-110 duration-250 active:scale-85 w-[30px] md:w-auto"/>
                    ) : (
                        <SunSvg className="hover:scale-110 duration-250 active:scale-85 w-[30px] md:w-auto"/>
                    )}            
                </button>
            </div>

        </>
    );
}
    
