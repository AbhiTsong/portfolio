import React from 'react'
import "./PreviewCardStyles.scss"
import {Link} from "react-router-dom";

function PreviewCardComponent({items}) {
 const {name,imageUrl, id} = items
 return (
  <div className="preview-card" key = {id}>
   <div className="card-image">
    <Link to={`${id === 1 ? "/project/react" :`${id === 10 ? "/project/html" : "/project/grave"}`}`}>
      <img className="image" onClick={() => console.log(id)} src={imageUrl} alt="logos" />
    </Link>
   </div>
   <span>{name}</span>
  </div>
 )
}

export default PreviewCardComponent;