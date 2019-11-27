import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import ProjectProvider from "./Context";

// Page Imports
import HomePage from "./Pages/Home/HomePage"
import ProjectsPageS from "./Pages/ProjectsPage/ProjectsPageS";
import AboutPage from "./Pages/About/AboutPage";
import ReactProject from "./Pages/ReactProjects/ReactProject";
import CssProject from  "./Pages/CssProject/CssProject"
import GraveProject from  "./Pages/GraveProject/GraveProject"



function App() {
  return (
    <ProjectProvider>
    <div className="App">
      <Switch>
        <Route exact path ="/" component ={HomePage}/>
        <Route exact path ="/project" component ={ProjectsPageS}/>
        <Route exact path ="/about" component ={AboutPage}/> 
        <Route exact path = "/project/react" component ={ReactProject} />
        <Route exact path = "/project/html" component ={CssProject} />
        <Route exact path = "/project/grave" component ={GraveProject} />
      </Switch>
    </div>
    </ProjectProvider>
  );
}

export default App;
