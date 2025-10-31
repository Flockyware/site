'use client'
import { BskComp, EmailComp } from "@/components/linkComponents";
import Image from "next/image";
import useSound from "use-sound";
import { useContext, useState } from "react";
import { GlobalContext } from "@/components/globalContext";






export default function Contact() {
  
  return (
    <>
      <div className=" w-full mx-auto  border-4 rounded-xl  text-3xl ">

        <div className="flex ">
          <h2 className="text-3xl/normal md:text-4xl/normal ml-5 font-light">
            Get in contact with me
          </h2>
        </div>

        <div className="mx-auto pb-10  border-t-4 text-2xl md:text-3xl mb-auto px-2">


          <div className="flex justify-center animate-wiggle my-5">
            <Image
              className="mx-auto dog"
              unoptimized={true}
              src={"/email.webp"}
              width={400}
              height={200}
              alt="contact"
            />
          </div>

          <div className="flex justify-center-safe text-center font-light">
            if you want to contact me you can send me an email to
          </div>


          <EmailComp/>

          <div className=" flex justify-center font-light">
           <p className="text-center md:text-left">
            Or you can contact me at my socials for now&nbsp;
            </p>  
          </div>
            <BskComp/>
          

          <div className="flex justify-center md:px-40 px-10  font-light">
            <MiniHeart/>
            <p className="text-center">I try to read every message!</p>
            <MiniHeart/>
          </div>


        </div>
      </div>
    </>
  );
}

const MiniHeart = ()=>{
  const global = useContext(GlobalContext);
  const [pitch, setPitch] = useState(0.70);
  
  const CapPitch = (n:number) => {
    if (n>1.5){
      return n;
    }else{
      return n +0.05;
    }
  }
  const [press] = useSound('/sfx/snd_power.wav', {
    playbackRate: pitch,
    volume: 0.50,
    soundEnabled: global?.soundEnable,
    interrupt: true
  });
  return(
    <button onClick={()=>{setPitch(CapPitch(pitch)); press();}} className="w-auto m-auto my-auto mx-0 animate-rainbow-effect  hover:scale-110 active:scale-95 duration-200">❤</button>
  );
}