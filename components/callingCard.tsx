import Image from "next/image";

export default function CallingCard() {
  return (
    <>

      <div className="justify-start  border-4 flex">
        <Image
          src={"https://picsum.photos/id/1/200/200"}
          width={200}
          height={200}
          alt="placeholder"
        />

        <div className="border-4 text-amber-400 flex-1 ml-2">
          Roberto Quintero
          <div className="">Flocky</div>
        </div>

      </div>
    
    </>
  );
}
