import CallingCard from "@/components/callingCard";
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


          <div className=" flex justify-center px-40 font-regular my-5 text-bavaroa-500 underline ">

            <div className="email">contactflocky@<span>gmail.</span>com</div>

          </div>

          <div className=" flex justify-center px-40  font-light">
            Or you can contact me at my socials for now, 
          </div>

          <div className=" flex justify-center px-40  font-light">
            i try to read every message ❤
          </div>


        </div>
      </div>
    </>
  );
}