import React, { Component } from 'react'
import PROJECT_DATA from "./project.data";

const ProjectContext = React.createContext()

export default class ProjectProvider extends Component {
 constructor(props) {
  super(props)
  this.state = {
    project: PROJECT_DATA,
    react: []
  }
 }
 
 render() {
  return (
   <ProjectContext.Provider 
    value={
     {...this.state,
     }}>
    {this.props.children}
   </ProjectContext.Provider>
  )
 }
}

const ProjectConsumer = ProjectContext.Consumer;
export {ProjectConsumer};
