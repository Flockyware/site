import * as React from "react"
import { SVGProps } from "react"

const SoundOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M3 14v-4a1 1 0 0 1 1-1h2.697a1 1 0 0 0 .555-.168l4.193-2.796A1 1 0 0 1 13 6.87V17.13a1 1 0 0 1-1.555.832l-4.193-2.795A1 1 0 0 0 6.697 15H4a1 1 0 0 1-1-1Z"
    />
  </svg>
)

const SoundOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17 14 2-2m2-2-2 2m0 0-2-2m2 2 2 2"
      />
      <path d="M3 14v-4a1 1 0 0 1 1-1h2.697a1 1 0 0 0 .555-.168l4.193-2.796A1 1 0 0 1 13 6.87V17.13a1 1 0 0 1-1.555.832l-4.193-2.795A1 1 0 0 0 6.697 15H4a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
)

export { SoundOn, SoundOff };
