import React, {useState} from 'react'
import { Link } from "react-router-dom"

const ChooseCrust = () => {
    const [active, setActive] = useState("Thin");
    const [price, setPrice] = useState((10).toFixed(2));
    const [pizza, setPizza] = useState("choose-pizza-large")

    
    const thinCrust = () => {
        var amount = 8.00
        var amountF = amount.toFixed(2);
        setActive("Thin")
        setPrice(amountF)
        setPizza("choose-pizza-large")
    }
    const thickCrust = () => {
        var amount = 10.00
        var amountF = amount.toFixed(2);
        setActive("Thick")
        setPrice(amountF)
        setPizza("choose-pizza-thick")
    }
    

    return (
        <div className="choose-main">
            <div className="choose-top">
                <div>
                    <p className="choose-size-heading">Create Your Pizza</p>
                    <p className="choose-steps"><strong>MEDIUM</strong>, CRUST, TOPPINGS</p>
                </div>
                <div className="choose-size-price">${price}</div>
            </div>
            <div className="choose-mid">
                <div className="choose-menu">
                    <p>Choose your <strong>Crust</strong></p>
                    <div choose-menu-btn-container>
                        <button 
                            className={` choose-menu-btn ${active==="Thin" ? 'menu-active':''}`}
                            onClick={thinCrust}
                        >Thin</button>
                        <button 
                            className={` choose-menu-btn ${active==="Thick" ? 'menu-active':''}`}
                            onClick={thickCrust}
                        >Thick</button>
                    </div>
                </div>
            </div>
            <Link to="/toppings" className="choose-next-btn">Next</Link>
            <div className="choose-circle"></div>
            <div className={pizza}></div>
        </div>
    )
}

export default ChooseCrust