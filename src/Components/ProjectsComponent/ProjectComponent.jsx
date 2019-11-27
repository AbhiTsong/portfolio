import React from 'react'
import "./ProjectStyles.scss"
import ProjectView from "../ProjectView/ProjectViewComponent";

export default function ProjectComponent({project: {id, title, items}}) {
 return (
  <div className="project-card">
   {
    items.map(el => {
     return(<ProjectView  key ={el.id} items={el}/>)
    })
   }
  </div>
 )
}
