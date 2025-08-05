import Image from "next/image";

export default function CallingCard() {
  return (
    <>
        <div>

            <div className="flex border-8 w-auto">
            <Image
            src={"https://picsum.photos/id/1/200/200"}
              width={200}
              height={200}
              alt="placeholder"
              >
                </Image>

            </div>
        </div>
    </>
  );
}
