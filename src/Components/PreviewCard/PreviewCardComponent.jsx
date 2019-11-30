import React from 'react'
import "./PreviewCardStyles.scss"
import {Link} from "react-router-dom";

function PreviewCardComponent({items}) {
 const {imageUrl, id} = items
 return (
  <div className="preview-card" key = {id}>
   <div className="card-image">
    <Link to={`${id === 1 ? "/project/react" :`${id === 2 ? "/project/html" : "/project/grave"}`}`}>
      <img className="image"  src={imageUrl} alt="logos" />
    </Link>
   </div>
  
  </div>
 )
}

export default PreviewCardComponent;