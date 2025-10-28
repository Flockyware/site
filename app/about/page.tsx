import CallingCard from "@/components/callingCard";
import AsepriteSvg from "@/components/svg/asepriteSvg";
import BlenderSvg from "@/components/svg/blenderSvg";
import ExternalLinkSvg from "@/components/svg/externalLink";
import GamemakerSvg from "@/components/svg/gamemakerSvg";
import GodotSvg from "@/components/svg/godotSvg";
import UnitySvg from "@/components/svg/unitySvg";
import Tag from "@/components/tag";

export default function Home() {
  return (
    <>
      <div className=" mx-auto  border-4 rounded-xl  text-3xl ">
        
        <div className="flex ">
          <h2 className="text-4xl/normal ml-5 font-light">
            About Me
          </h2>
        </div>

        <div className="border-t-4  pt-5 md:overflow-y-scroll md:max-h-125">
          
          <CallingCard  />
          <div className="md:grid md:grid-cols-2 md:gap-5 mt-4  max-w-190 mx-auto">
            <div className="">
              <div className="mx-auto justify-center px-1">
                Development
              </div>
              <div className="flex flex-wrap border-amber-700  border- mx-auto  ">
                
                <Tag text="C#"><></></Tag>
                <Tag text="C++"><></></Tag>
                <Tag text="Python"><></></Tag>
                <Tag text="HTML & CSS"><></></Tag>
                <Tag text="Javascript"><></></Tag>
                <Tag text="Typescript"><></></Tag>
                <Tag text="React"><></></Tag>
                <Tag text="Next.js"><></></Tag>
                <Tag text="SQL"><></></Tag>
                <Tag text="MongoDB"><></></Tag>



                
              </div>
            </div>
            <div className=" ">
              <div className="px-1">
                Tools
              </div>
              <div className="flex flex-wrap  mx-auto">
                <Tag text="Godot">
                  <GodotSvg />
                </Tag>
                <Tag text="Unity">
                  <UnitySvg />
                </Tag>
                <Tag text="GameMaker"><GamemakerSvg/></Tag>
                <Tag text="Blender"><BlenderSvg/></Tag>
                <Tag text="Aseprite"><AsepriteSvg/></Tag>


              </div>
            </div>
          </div>

          <hr className=" w-90/100 mx-auto opacity-25 my-5 border-1"/>
          
          <div className="my-5">

            <p className="text-xl/normal font-light mx-auto w-88/100 border- text-center md:text-left">
              Hi there! i'm dedicated mostly to software and game development, i love the problem solving and just to sit down and try to figure out how something it's done
            </p>
            <br />
            <p className="text-xl/snug font-light  w-88/100 mx-auto border- text-center md:text-left">
              I live in South America, as a graduated in <p >Computer Science</p> and im tryng to make the most of my pasions  
            </p>

            
            <br />
            <p className="text-xl/snug font-light  w-88/100 mx-auto border- text-center md:text-left">
              I hope you look forward whatever me of the future is on!
            </p>
          </div>

        </div> 
      </div>
    </>
  );
}