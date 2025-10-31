import Image from "next/image";

export default function CallingCard() {
  return (
    <>

      <div className=" bg-white dark:bg-slate-900  md:border-2 p-3 md:flex rounded-2xl md:max-w-165 md:w-full w-9/10 mx-auto border-2  flex-1 justify-center  ">
        <div className="border-2 rounded-full flex h-min max-w-[150px] mx-auto md:mx-0">
          <Image
            className="rounded-full duration-250 hover:scale-105"
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="placeholder"
          />
          {/* <Image src={"/codec_snake.jpg"} width={176} height={176} alt="snake"></Image> */}
        </div>

        <div className="md:flex-1">
          <div className="my-1 md:m-10">
            
            <div className=" text-4xl text-center md:text-start ">Flocky</div>
            <div className="text-lg/5 font-light text-center md:text-start px-8 md:px-0 ">Freelance Programmer,  Game Developer, Designer and Pastries Enjoyer </div>

          </div>
        </div>

      </div>
    
    </>
  );
}
