import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={460}
    viewBox="0 0 1200 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="-1" rx="0" ry="0" width="115" height="507" /> 
    <rect x="42" y="241" rx="0" ry="0" width="4" height="15" /> 
    <rect x="129" y="93" rx="0" ry="0" width="301" height="31" /> 
    <rect x="129" y="128" rx="0" ry="0" width="278" height="14" /> 
    <rect x="129" y="162" rx="0" ry="0" width="459" height="29" /> 
    <rect x="313" y="163" rx="0" ry="0" width="2" height="13" /> 
    <circle cx="143" cy="213" r="12" /> 
    <circle cx="171" cy="212" r="13" /> 
    <circle cx="200" cy="212" r="12" /> 
    <circle cx="226" cy="212" r="11" />
  </ContentLoader>
)

export default Loading

