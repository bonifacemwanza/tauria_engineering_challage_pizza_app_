import React, {useState} from 'react'
import { Link } from "react-router-dom"

const ChooseSize = () => {
    const [active, setActive] = useState("Medium");
    const [price, setPrice] = useState((10).toFixed(2));
    const [pizza, setPizza] = useState("choose-pizza-medium")

    
    const smallPizza = () => {
        var amount = 8.00
        var amountF = amount.toFixed(2);
        setActive("Small")
        setPrice(amountF)
        setPizza("choose-pizza-small")
    }
    const mediumPizza = () => {
        var amount = 10.00
        var amountF = amount.toFixed(2);
        setActive("Medium")
        setPrice(amountF)
        setPizza("choose-pizza-medium")
    }
    const largePizza = () => {
        var amount = 12.00
        var amountF = amount.toFixed(2);
        setActive("Large")
        setPrice(amountF)
        setPizza("choose-pizza-large")
    }
    
    return (
        <div className="choose-main">
            <div className="choose-top">
                <div>
                    <p className="choose-size-heading">Create Your Pizza</p>
                    <p className="choose-size-steps">SIZE, CRUST, TOPPINGS</p>
                </div>
                <div className="choose-size-price">${price}</div>
            </div>
            <div className="choose-mid">
                <div className="choose-menu">
                    <p>Choose your <strong>Size</strong></p>
                    <div classname="choose-menu-btn-container">
                        <button 
                            className={` choose-menu-btn ${active==="Small" ? 'menu-active':''}`}
                            onClick={smallPizza}
                        >Small</button>
                        <button 
                            className={` choose-menu-btn ${active==="Medium" ? 'menu-active':''}`}
                            onClick={mediumPizza}
                        >Medium</button>
                        <button 
                            className={` choose-menu-btn ${active==="Large" ? 'menu-active':''}`}
                            onClick={largePizza}
                        >Large</button>
                    </div>
                </div>
            </div>
            <Link to="/crust" className="choose-next-btn">Next</Link>
            <div className="choose-circle"></div>
            <div className={pizza}></div>
        </div>
    )
}

export default ChooseSize