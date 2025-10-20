'use client'

import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useSound from "use-sound";
import { GlobalContext } from "./soundContext";





export default function DarkMode() {

    const global = useContext(GlobalContext)
    const [playDown] = useSound('/sfx/button_click_004_down.mp3',{volume:0.95, soundEnabled:global?.soundEnable});
    const [playUp] = useSound('/sfx/button_click_004_up.mp3',{volume:0.95, soundEnabled:global?.soundEnable});

 

    return (
        <>
            <div className="flex mr-auto">
                <button
                    onClick={() => global?.setIsDark(!global.isDark)}
                    onMouseDown={() => playDown()}
                    onMouseUp={() => playUp()}
                >
                    {(global?.isDark == false) ? (
                        <MdDarkMode className="size-11 m-auto hover:scale-110 duration-250 active:scale-85" />
                    ) : (
                        <MdLightMode className="size-11 m-auto hover:scale-110 duration-250 active:scale-85" />
                    )}            
                </button>
            </div>

        </>
    );
}
    
