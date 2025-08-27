import CallingCard from "@/components/callingCard";
import Image from "next/image";




export default function Contact() {
  return (
    <>
      <div className="max-w-4xl w-full mx-auto text-white border-4 rounded-xl  text-3xl">

        <div className="flex ">
          <h2 className="text-4xl/normal font-regular border-2 border-amber-900 ">
            Get in contact with me
          </h2>
        </div>

        <div className=" mx-auto text-white border-t-4    text-3xl mb-auto">

          <CallingCard></CallingCard>

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

          <div className=" flex justify-center px-40  ">
            Or you can contact me at my socials for now, 
          </div>

          <div className=" flex justify-center px-40  ">
            i try to read every message ❤
          </div>


        </div>
      </div>
    </>
  );
}