import React from 'react';
import "./PreviewStyles.scss"
import PreviewCardComponent from "../PreviewCard/PreviewCardComponent"

export default function PreviewComponent({title, items}) {

 return (
  <div className="preview">
   <h2 className="header" >{title.toUpperCase()}</h2>
   {
    items
    .filter((item, index) => index < 1)
    .map((item) =>(
     <PreviewCardComponent key ={item.id} items = {item}/>
    ) )  
   }
  </div>
 )
}
