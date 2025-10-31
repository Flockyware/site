import { useContext } from "react";
import { GlobalContext } from "./globalContext";
import useSound from "use-sound";


export const BigHeart=()=>{
  const global = useContext(GlobalContext);
    const Randomheartsfx = () => {
        const rng = Math.random() * 10;
        if (rng > 6.6) {
            return '/sfx/snd_magicsprinkle.wav';
        } else if (rng > 3.3) {
            return '/sfx/snd_item.wav';
        } else {
            return '/sfx/snd_power.wav';
        }
    }
    

  const [sound] = useSound(Randomheartsfx(), {
    playbackRate: 1,
    volume: 0.4,
    soundEnabled: global?.soundEnable,
    interrupt: true
  });
  
  return(
    <>
      <button onClick={()=>{sound()}} className="w-min ml-1 animate-rainbow-effect duration-200 hover:scale-110  active:scale-90">❤</button>  {/*❤*/}   
    </>
  );
}