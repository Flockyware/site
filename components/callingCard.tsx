import Image from "next/image";

export default function CallingCard() {
  return (
    <>

      <div className="mask-radial-at-center mask-radial-from-100%  border-4">
        <Image
          src={"https://picsum.photos/id/1/200/200"}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
    
    </>
  );
}
