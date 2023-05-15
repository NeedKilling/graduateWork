import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingCatalog() {
  return (
    
        <ContentLoader 
        speed={2}
        width={155}
        height={218}
        viewBox="0 0 155 218"
        backgroundColor="#181818"
        foregroundColor="#3d3a3a"
        >
        <rect x="0" y="0" rx="10" ry="10" width="155" height="218" />
        </ContentLoader>
        )
  
}

export default LoadingCatalog