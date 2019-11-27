import React from 'react'

export default function ProjectView({items:{id, imageUrl, name}}) {
 return (
  <div className="projects">
   <h1>{name}</h1>
   <img src={imageUrl}/>
  </div>
 )
}
