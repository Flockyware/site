import * as React from "react"
import { SVGProps } from "react"
const SunSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 0 24 24"
    className="block w-auto m-auto my-auto mx-0 fill-current"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M12 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        clipRule="evenodd"
      />
      <path d="M20.485 4.929a1 1 0 0 0-1.414-1.414L16.95 5.636a1 1 0 0 0 1.414 1.414l2.121-2.121ZM24 12a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1ZM19.071 20.485a1 1 0 0 0 1.414-1.414l-2.121-2.121a1 1 0 1 0-1.414 1.414l2.121 2.121ZM12 24a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM3.515 19.071a1 1 0 1 0 1.414 1.414l2.121-2.121a1 1 0 0 0-1.414-1.414L3.515 19.07ZM0 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM4.929 3.515a1 1 0 1 0-1.414 1.414L5.636 7.05A1 1 0 0 0 7.05 5.636L4.93 3.515Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SunSvg;