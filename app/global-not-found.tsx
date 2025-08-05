import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link href={"/"}>return Home</Link>
      </body>
    </html>
  )
}