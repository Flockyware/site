import ExternalLinkSvg from "@/components/externalLink";
import Image from "next/image";




export default function Contact() {
  return (
    <>
      <div className=" w-full mx-auto  border-4 rounded-xl  text-3xl">

        <div className="flex ">
          <h2 className="text-4xl/normal ml-5 font-light">
            Get in contact with me
          </h2>
        </div>

        <div className="mx-auto pb-10  border-t-4  text-3xl mb-auto">

          {/* <CallingCard></CallingCard> */}

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

          <div className="flex justify-center-safe font-light">
            if you want to contact me you can send me an EMAIL to
          </div>


          <div className=" flex justify-center px-40 font-regular my-5 text-bavaroa-500 underline  hover:text-bavaroa-800">

            <div className="email ">contactflocky@<span>gmail.</span>com</div>

          </div>

          <div className=" flex justify-center font-light">
           <p className="">
            Or you can contact me at my socials for now&nbsp;
            </p>  

          </div>

          <div className="text-gray-600 dark:text-gray-400 mb-4 flex justify-center font-light">
            {"("}preferably&nbsp; 
            <a className="underline flex text-gray-300 hover:text-bsk-500 active:scale-90 active:text-bsk-800  duration-200" href="https://bsky.app/profile/flockyware.bsky.social" target="_blank">
              bluesky
            <ExternalLinkSvg className="scale-80"/> 
            </a> 
            {")"}
          </div>


          <div className="flex justify-center px-40  font-light">
            i try to read every message <p className="animate-rainbow-effect">❤</p>
          </div>


        </div>
      </div>
    </>
  );
}