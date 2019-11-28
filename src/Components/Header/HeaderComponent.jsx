import React from 'react'
import {NavLink} from "react-router-dom"
import "./HeaderStyles.scss"

export default function HeaderComponent() {
 return (
  <div className="nav-bar">
   <div className="logo">
    <NavLink exact to="/">
    <h1>AbhiTsong</h1>
    </NavLink>
   </div>
   <div className="options">
    <NavLink exact to="/" activeStyle = {{fontWeight: "bold", color: "rgba(240, 5, 248, 0.959)"}}>
     Home
    </NavLink>
    <NavLink to="/project" activeStyle = {{fontWeight: "bold", color: "rgba(240, 5, 248, 0.959)"}}>
     Projects
    </NavLink>
    <NavLink to="/about" activeStyle = {{fontWeight: "bold", color: "rgba(240, 5, 248, 0.959)"}}>
     About
    </NavLink>
   </div>
  </div>
 )
}
