import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className = 'fumo-block'
    speed={2}
    width={280}
    height={576}
    viewBox="0 0 280 576"
    backgroundColor="#ddd9d9"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="5" rx="0" ry="0" width="499" height="390" /> 
    <rect x="0" y="410" rx="15" ry="15" width="280" height="22" /> 
    <rect x="0" y="450" rx="15" ry="15" width="268" height="57" /> 
    <rect x="-1" y="520" rx="15" ry="15" width="95" height="27" /> 
    <rect x="115" y="520" rx="15" ry="15" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton