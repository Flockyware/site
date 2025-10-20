import "./globals.css";
import Image from "next/image";

export default function GlobalNotFound() {
  return (
    <html>
      <body className="items-center-safe justify-center flex h-screen ">
        <Image
        className="mx-auto  scale-700 dog"
        src={"https://deltarune.com/assets/images/dog-maraca.gif"}
        width={27}
        height={12}
        alt="dog"
        ></Image>
      </body>
    </html>
  )
}