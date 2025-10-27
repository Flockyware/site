import Image from "next/image";

export default function CallingCard() {
  return (
    <>

      <div className="justify-center bg-white dark:bg-slate-900  border-2 p-3 flex rounded-2xl max-w-165 mx-auto    ">
        <div className="border-2 rounded-full flex h-min">
          <Image
            className="rounded-full duration-250 hover:scale-105"
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="placeholder"
          />
          {/* <Image src={"/codec_snake.jpg"} width={176} height={176} alt="snake"></Image> */}
        </div>

        <div className="flex-1  ">
          <div className=" m-10">
            
            <div className=" text-4xl">Flocky!</div>
            <div className="text-lg/5 font-light   ">Freelance Programmer,  Game Developer and Designer</div>

          </div>
        </div>

      </div>
    
    </>
  );
}
