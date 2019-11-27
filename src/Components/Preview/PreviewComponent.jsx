import React from 'react';
import "./PreviewStyles.scss"
import PreviewCardComponent from "../PreviewCard/PreviewCardComponent"

export default function PreviewComponent({title, items}) {

 return (
  <div className="preview">
   <h1 className="header" >{title.toUpperCase()}</h1>
   {
    items
    .filter((item, index) => index < 1)
    .map((items) =>(
     <PreviewCardComponent key ={items.id} items = {items}/>
    ) )  
   }
  </div>
 )
}
