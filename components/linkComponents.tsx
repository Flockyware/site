'use client'

import { useContext } from "react";
import useSound from "use-sound";
import { GlobalContext } from "./globalContext";
import ExternalLinkSvg from "./svg/externalLink";




export function EmailComp() {
  const global = useContext(GlobalContext);
  const [onhover] = useSound('/sfx/href_pos_sfx.mp3', {
    playbackRate: 1.1,
    volume: 0.50,
    soundEnabled: global?.soundEnable,
    interrupt: true
  });
  const [outhover] = useSound('/sfx/href_neg_sfx.mp3', {
    playbackRate: 1.1,
    volume: 0.50,
    soundEnabled: global?.soundEnable,
    interrupt: true
  });
  return (
      <>
          <div onMouseEnter={()=>onhover()} onMouseLeave={()=>outhover()}  className="flex w-min justify-center text-xl md:text-2xl mx-auto font-regular my-5 text-bavaroa-500   hover:text-bavaroa-800 hover:scale-105 duration-200">

              <div className="inline-flex">contactflocky <span className="">&nbsp;{"[at]"}&nbsp;</span><span>gmail</span><span>&nbsp;{"[dot]"}&nbsp;</span>com</div>

          </div>
      </>
  );
}


export function BskComp() {
  const global = useContext(GlobalContext);
    const [onhover] = useSound('/sfx/href_pos_sfx.mp3', {
      playbackRate: 1.2,
      volume: 0.50,
      soundEnabled: global?.soundEnable,
      interrupt: true
    });
    const [outhover] = useSound('/sfx/href_neg_sfx.mp3', {
      playbackRate: 1.2,
      volume: 0.50,
      soundEnabled: global?.soundEnable,
      interrupt: true
    });
  return (
    <>
      <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-center font-light">
        {"("}preferably&nbsp;
        <a onMouseEnter={()=>onhover()} onMouseLeave={()=>outhover()} className="underline flex hover:scale-103 text-gray-700 dark:text-gray-300 hover:text-bsk-500 active:scale-90 active:text-bsk-800  duration-200" href="https://bsky.app/profile/flockyware.bsky.social" target="_blank">
          bluesky
          <ExternalLinkSvg />
        </a>
        {")"}
      </div>
    </>
  );
}