
"use client";
import NavBarItem from "./navbar_item";
import MuteButton from "./muteButton";
import DarkMode from "./darkmodebutton";
export default function NavBar() {
  return (
    <>

      <div className="flex border-0 items-center-safe justify-end  h-auto mb-5 mt-3 w-full" >
        <div className="flex min-w-30 border-0 mr-auto felx ">
          
          <DarkMode/>
          <MuteButton/>
        </div>
        <NavBarItem href={"/"} title={"Home"}></NavBarItem>
        <NavBarItem href={"/about"} title={"About"}></NavBarItem>
        <NavBarItem href={"/work"} title={"Work"}></NavBarItem>
        <NavBarItem href={"/contact"} title={"Contact"}></NavBarItem>

      </div>
      
    </>
  );
}
