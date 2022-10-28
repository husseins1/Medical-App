import * as React from "react"
import Svg, { SvgProps, Rect } from "react-native-svg"

const SvgComponent = ({fill}:{fill?:string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 68"
    
  >
    <Rect x={22} width={23} height={68} rx={6} fill={fill?fill:"#fff"} />
    <Rect
      y={45}
      width={23}
      height={68}
      rx={6}
      transform="rotate(-90 0 45)"
      fill={fill?fill:"#fff"}
    />
  </Svg>
)

export default SvgComponent