import React from 'react'
import "./CssProjectStyles.scss";
import {ProjectConsumer} from "../../Context";
import ProjectComponent from "../../Components/ProjectsComponent/ProjectComponent"

export default function ReactProject() {
 return (
  <div className="project-cards">
   <h1>HTML 5 & CSS 3</h1>
   <ProjectConsumer>
   {
    value => {
     return value.project
     .filter((el, indx) => {return(el.id === 2)} )
     .map(el => <ProjectComponent key = {el.id} project={el}/>)
     
    }
   }
   </ProjectConsumer>
  </div>
 )
}
