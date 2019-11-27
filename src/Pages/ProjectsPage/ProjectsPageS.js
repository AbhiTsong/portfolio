import React from 'react'
import "./ProjectsPageStyles.scss"
import PROJECT_DATA from "../../project.data";
import PreviewComponent from "../../Components/Preview/PreviewComponent"
const ProjectData =  JSON.parse(JSON.stringify(PROJECT_DATA));


class ProjectsPageS extends React.Component{
 constructor(props) {
  super(props)
  this.state = {
    project: ProjectData
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
