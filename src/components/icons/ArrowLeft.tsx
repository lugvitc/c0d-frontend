import * as React from "react"
interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {}

const ArrowLeft = (props: ArrowLeftProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 17 15"
    {...props}
  >
    <path
      d="M17 11V4H8V0H6v2H4v2H2v2H0v3h2v2h2v2h2v2h2v-4h9Z"
      style={{
        fill: "#ebebeb",
      }}
    />
  </svg>
)
export default ArrowLeft