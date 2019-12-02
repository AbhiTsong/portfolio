import React from 'react';
import "./ProjectStyles.scss"

export default function ProjectView({items:{id, imageUrl, name, link}}) {
 return (
  <div className="projects">
   <h1>{name}</h1>
   <a rel="noopener noreferrer"  target='_blank' href={`${link}`} >
      <img 
       alt ="logos"
       src={imageUrl} />
   </a>
      <a rel="noopener noreferrer"  target='_blank' href={`${link}`} > <h4 className="button">View Project</h4></a>
  </div>
 )
}
