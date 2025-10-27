  'use client'

import {  useContext } from "react";
import useSound from "use-sound";
import { SoundOff, SoundOn } from "./svg/soundSVG";
import { GlobalContext } from "./globalContext";


export default function MuteButton() {

  const global = useContext(GlobalContext)
  const [playDown] = useSound('/sfx/button_click_004_down.mp3',{volume:0.95, soundEnabled:global?.soundEnable});
   //i put that playup has opposite value of context because of logic reasons in UI
   //when i mute, the value is set to false but not yet for the playup so inversing the value helps that
  const [playUp] = useSound('/sfx/button_click_004_up.mp3',{volume:0.95, soundEnabled:!global?.soundEnable}); 
    
  return (
    <>
      <div className="flex ">
        <button
          //onClick={() => sound?.setSoundEnable(!sound.soundEnable)}
          onMouseDown={() => playDown()}
          onMouseUp={
            () => {
              global?.setSoundEnable(!global.soundEnable); 
              playUp();
            }
          }
        >
          {
            (global?.soundEnable == true) ? (
              <SoundOn className="hover:scale-110 duration-250 active:scale-85"/>          
            ) : 
            (
              <SoundOff className="hover:scale-110 duration-250 active:scale-85 "/>
            )
          }
        </button>

        
      </div>

    </>
  );
}



