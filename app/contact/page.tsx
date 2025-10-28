import ExternalLinkSvg from "@/components/svg/externalLink";
import Image from "next/image";




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


          <div className="flex w-min justify-center text-xl md:text-2xl mx-auto font-regular my-5 text-bavaroa-500   hover:text-bavaroa-800 hover:scale-105 duration-200">

            <div className="inline-flex">contactflocky <span className="">&nbsp;{"[at]"}&nbsp;</span><span>gmail</span><span>&nbsp;{"[dot]"}&nbsp;</span>com</div>

          </div>

          <div className=" flex justify-center font-light">
           <p className="text-center md:text-left">
            Or you can contact me at my socials for now&nbsp;
            </p>  

          </div>

          <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-center font-light">
            {"("}preferably&nbsp; 
            <a className="underline flex hover:scale-103 text-gray-700 dark:text-gray-300 hover:text-bsk-500 active:scale-90 active:text-bsk-800  duration-200" href="https://bsky.app/profile/flockyware.bsky.social" target="_blank">
              bluesky
            <ExternalLinkSvg /> 
            </a> 
            {")"}
          </div>


          <div className="flex justify-center md:px-40 px-10  font-light">
            <p className="w-auto m-auto my-auto mx-0 animate-rainbow-effect ">❤</p>
            <p className="text-center">I try to read every message!</p>
            <p className="w-auto m-auto my-auto mx-0 animate-rainbow-effect ">❤</p>
          </div>


        </div>
      </div>
    </>
  );
}