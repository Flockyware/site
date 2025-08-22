import CallingCard from "@/components/callingCard";
import Image from "next/image";




export default function Contact() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-white border-0  mt-5  text-3xl mb-auto">

        <div className="flex justify-center border-0 border-cyan-300">
          <Image
            className="mx-auto"
            src={"https://picsum.photos/200"}
            width={200}
            height={200}
            alt="contact"
          />
        </div>

        <div className="flex justify-center-safe">
          if you want to contact me you can send me an EMAIL to
        </div>



        <div>
          <Image
            className="mx-auto"
            src={"https://picsum.photos/300/100"}
            width={300}
            height={100}
            alt="email"
          />
        </div>

        <div className=" flex justify-center">
          or you can contact me at my socials for now
        </div>

        
        
      </div>
    </>
  );
}