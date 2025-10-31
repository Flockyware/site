import CallingCard from "@/components/callingCard";
import AsepriteSvg from "@/components/svg/asepriteSvg";
import BlenderSvg from "@/components/svg/blenderSvg";
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

          <CallingCard />
          <div className="md:grid md:grid-cols-2 md:gap-1 mt-4  max-w-180 mx-auto">
            <div className="">
              <div className="mx-auto justify-center  md:max-w-10/12 pl-2">
                Development
              </div>
              <div className="flex flex-wrap mx-auto  md:max-w-10/12 ">

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
              <div className="mx-auto justify-center  md:max-w-10/12 pl-2">
                Tools
              </div>
              <div className="flex flex-wrap  mx-auto md:max-w-10/12 ">
                <Tag text="Godot">
                  <GodotSvg />
                </Tag>
                <Tag text="Unity">
                  <UnitySvg />
                </Tag>
                <Tag text="GameMaker"><GamemakerSvg /></Tag>
                <Tag text="Blender"><BlenderSvg /></Tag>
                <Tag text="Aseprite"><AsepriteSvg /></Tag>


              </div>
            </div>
          </div>

          <hr className=" w-90/100 mx-auto opacity-25 my-5 border-1" />

          <div className="my-5">

            <p className="text-xl/normal font-light mx-auto w-85/100  md:w-88/100   md:text-left">
              Hi there! i'm dedicated mostly to software and game development, i love to...
            </p>

            <ul className="text-xl/normal font-light mx-auto  w-80/100 list-disc">
              <li>Create software</li>
              <li>Create and Design Games</li>
              <li>Develop websites and designs {"(Frontend)"}</li>
              <li>Develop and contribute to a Backend development</li>
            </ul>
            <br />


            <div className="text-2xl/normal mx-auto w-88/100 pl-2 md:pl-0">
              Other Interest:
            </div>
            <ul className="text-xl/normal font-light mx-auto  w-80/100 list-disc">
              <li>music, learning to compose in fl Studio, playing guitar</li>
              <li>Drawing {"Basic stuff, the hompage OC was drawn by me in aseprite"}</li>
              <li>Baking and eating desserts, i love sweet treats</li>
              <li>Math! tho i kinda suck i love puzzles</li>
            </ul>

            <br />

            <div className="text-2xl/normal md:mx-auto md:w-88/100 pl-2 md:pl-0">
              Language Proficiency:
            </div>
            <ul className="text-xl/normal font-light mx-auto  w-80/100 list-disc">
              <li>I'm a native <b>Spanish</b> speaker and</li>
              <li>I'm fluent in <b>English</b> {"(C1 - CEFR)"}</li>
            </ul>

            <br />
            <p className="text-xl/snug font-light  w-88/100 mx-auto border- text-center md:text-left">
              I hope you look forward whatever me of the future is on!
            </p>
            <br />

            <p className="text-lg md:text-lg opacity-90 font-light  w-70/100 mx-auto border- text-center ">i want to express my gratitude to <a className="text-bavaroa-500 hover:scale-90 active:scale-110 duration-200 underline" href="https://ncase.me/" target="_blank">Nikky Case</a> and <a className="text-bavaroa-500 hover:scale-90 active:scale-110 duration-200 underline" href="https://www.youtube.com/@shar" target="_blank">Sharyap</a> for being my inspiration for this site</p>

          </div>

        </div>
      </div>
    </>
  );
}