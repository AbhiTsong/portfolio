import React from 'react'
import "./ProjectsPageStyles.scss"
import{ PROJECT_PREVIEW }from "../../project.data";
import PreviewComponent from "../../Components/Preview/PreviewComponent"



class ProjectsPageS extends React.Component{
 constructor(props) {
  super(props)
  this.state = {
    project: PROJECT_PREVIEW
  }
 }
 
 
 render(){
  const {project} = this.state;
  return (
   <div className="project-page">
   {
    project.map(({id, ...propsProject}) => (
     <PreviewComponent key = {id} {...propsProject}/>
    ) )
   }
  </div>
 )
 }
}

export default ProjectsPageS;
