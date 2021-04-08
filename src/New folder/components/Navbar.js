import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { TiHome } from 'react-icons/ti'

const navbar = () => {
    return (
        <div className="navbar">
           <div className = "navbar-first nav-icon">
               <AiOutlineArrowLeft/>
           </div>
           <div className = "navbar-mid">
               <p>Uncle John Pizzas</p>
           </div>
           <div className = "navbar-last nav-icon">
               <TiHome/>
           </div>
        </div>
    )
}

export default navbar
