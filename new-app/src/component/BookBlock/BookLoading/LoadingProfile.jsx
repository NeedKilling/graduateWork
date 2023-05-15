import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingProfile() {
  return (
    
    <ContentLoader className='content_item'
    speed={2}
    width={916}
    height={108}
    viewBox="0 0 916 108"
    backgroundColor="#202020"
    foregroundColor="#3d3a3a"
  >
    <rect x="0" y="0" rx="10" ry="10" width="80" height="108" /> 
    <rect x="108" y="49" rx="10" ry="10" width="121" height="17" /> 
    <rect x="109" y="80" rx="10" ry="10" width="92" height="17" /> 
    <rect x="105" y="11" rx="10" ry="10" width="144" height="27" />
    
  </ContentLoader>
        )
  
}

export default LoadingProfile