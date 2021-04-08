import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ChooseCrust = ({pizza, price}) => {
    const [active, setActive] = useState("Thin");
    const [newPrice, setNewPrice] = useState((10).toFixed(2));
    const [newPizza,setNewPizza ] = useState("choose-pizza-large")

    
    const thinCrust = () => {
        var amount = 8.00;
        var amountF = amount.toFixed(2);
        setActive("Thin")
        setNewPrice(amountF)
        setNewPizza("choose-pizza-large")
    }
    const thickCrust = () => {
        var amount = 10.00;
        var amountF = amount.toFixed(2);
        setActive("Thick")
        setNewPizza(amountF)
        setNewPizza("choose-pizza-thick")
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
            <Link className="choose-next-btn" pizzasiz={pizza} pricesize={price} crustpizza={newPizza} crusprice={newPrice} to="/choosetoppings"><p>Next</p></Link>
            <div className="choose-circle"></div>
            <div className={pizza}></div>
        </div>
    )
}

export default ChooseCrust