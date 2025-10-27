import * as React from "react"
import { SVGProps } from "react"
const UnitySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    className="block w-auto m-auto my-auto mx-0 fill-current "

    {...props}
  >
    <title>{"unity"}</title>
    <path d="m25.94 25.061-5.382-9.06 5.382-9.064 2.598 9.062-2.599 9.06zm-11.994-.87-6.768-6.717h10.759l5.38 9.061-9.372-2.342zm0-16.382 9.371-2.342-5.379 9.061H7.177zm17.05 5.108L27.714 1.004 15.463 4.197l-1.812 3.112-3.68-.027-8.966 8.719 8.967 8.72 3.678-.029 1.817 3.112 12.246 3.192 3.283-11.908-1.864-3.087z" />
  </svg>
)
export default UnitySvg