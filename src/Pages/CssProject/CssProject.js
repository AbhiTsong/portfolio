import React from 'react'
import {ProjectConsumer} from "../../Context";
import ProjectComponent from "../../Components/ProjectsComponent/ProjectComponent"

export default function ReactProject() {
 // console.log(items)
 return (
  <div>
   <h1>React</h1>
   <ProjectConsumer>
   {
    value => {
     return value.project.
     filter((el, indx) => {return(el.id === 2)} )
     .map(el => <ProjectComponent key = {el.id} project={el}/>)
     
    }
   }
   </ProjectConsumer>
  </div>
 )
}
