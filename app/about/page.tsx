import CallingCard from "@/components/callingCard";

export default function Home() {
  return (
    <>
      <div className=" mx-auto  border-4 rounded-xl  text-3xl ">
          
        <div className="flex ">
          <h2 className="text-4xl/normal ml-5 font-light">
            About Me
          </h2>
        </div>

        <div className="border-t-4  pt-5">
          
          <CallingCard  />
          
          <div className="my-10">

            <p className="work-p ">
              Im flocky, i dedicate to mostly to software and game development, i love the problem solving and learning how to do something or how something is done 
            </p>
            
            <p className="work-p border-2">
              I live in Venezuela, as a graduated in Software Development and im tryng to make the most  
            </p>

          </div>

        </div> 
      </div>
    </>
  );
}