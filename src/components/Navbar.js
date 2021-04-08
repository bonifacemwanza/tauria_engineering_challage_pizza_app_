import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { TiHome } from 'react-icons/ti'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"

const Navbar = () => {
    let history = useHistory();
    return (
        <div className="navbar">
           <div className = "navbar-first nav-icon" onClick={history.goBack} >
               <AiOutlineArrowLeft/>
           </div>
           <div className = "navbar-mid">
               <p>Uncle John Pizzas</p>
           </div>
           <Link to="/" className = "navbar-last nav-icon">
               <TiHome/>
           </Link>
        </div>
    )
}

export default Navbar
