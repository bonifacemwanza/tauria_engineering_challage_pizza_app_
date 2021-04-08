import React, {useState} from 'react';
import {BsCheck} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ChooseToppings = (props) => {
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
                    <p className="choose-steps"><strong>MEDIUM, THICK,</strong> TOPPINGS</p>
                </div>
                <div className="choose-size-price">${price}</div>
            </div>
            <div className="choose-mid">
                <div className="choose-menu">
                    <p>Choose your <strong>Toppings</strong></p>
                    <p className="choose-menu-add-ons">FREE 3 ADD-ONS</p>
                    <div className="choose-toppings-slide">
                        
                        <div className="choose-pepperoni">
                            <div className="choose-topping-pic"></div>
                            <div className="choose-topping-detail">
                                <p><strong>Pepperoni</strong></p>
                                <p>+ $0.00</p>
                            </div>
                            <div className="choose-topping-check">
                                <BsCheck/>
                            </div>
                        </div>
                        {/*<div className="choose-pepperoni">
                            <div className="choose-topping-pic"></div>
                            <div className="choose-topping-detail">
                                <p><strong>Pepperoni</strong></p>
                                <p>+ $0.00</p>
                            </div>
                            <div className="choose-topping-check"></div>
                        </div>
                        <div className="choose-pepperoni">
                            <div className="choose-topping-pic"></div>
                            <div className="choose-topping-detail">
                                <p><strong>Pepperoni</strong></p>
                                <p>+ $0.00</p>
                            </div>
                            <div className="choose-topping-check"></div>
                        </div>
                        <div className="choose-pepperoni">
                            <div className="choose-topping-pic"></div>
                            <div className="choose-topping-detail">
                                <p><strong>Pepperoni</strong></p>
                                <p>+ $0.00</p>
                            </div>
                            <div className="choose-topping-check"></div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Link className="choose-next-btn" props = {props} to="/checkpizza"><p>Done</p></Link>
            <div className="choose-circle"></div>
            <div className={pizza}></div>
        </div>
    )
}

export default ChooseToppings