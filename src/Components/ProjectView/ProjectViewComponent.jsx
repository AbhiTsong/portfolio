import React from 'react';
import "./ProjectStyles.scss"

export default function ProjectView({items:{id, imageUrl, name, link}}) {
 return (
  <div className="projects">
   <h1>{name}</h1>
   <a target='_blank' href={`${link}`}>
      <img 
       
       src={imageUrl} />
   </a>
  </div>
 )
}
