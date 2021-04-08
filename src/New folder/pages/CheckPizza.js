import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'

const CheckPizza = (props) => {

    return (
        <div className="choose-main">
            <div className="check-pizza-top">
                <FaPizzaSlice/>
                <p>Check your</p>
                <p><strong>custom pizza</strong></p>
            </div>
            <div className="choose-mid">
                
            </div>
              <Link className="choose-next-btn" to="/checkout"> <p >Confirm Pizza</p></Link>
            <div className="check-pizza-circle"></div>
            <div className="final-pizza"></div>
            <div className="check-details"></div>
            <div className="check-details-text">
                <div className="check-details-text-top">
                    <FaShoppingCart/>
                    <p>ORDER SUMMARY</p>
                </div>
                <div className="check-details-text-main">
                    <div className="check-details-text-item"><p>Medium Size</p><p>$10.00</p></div>
                    <div className="check-details-text-item"><p>Thick Crust</p><p>$4.00</p></div>
                    <div className="check-details-text-item"><p>Pepperoni</p><p>$0.00</p></div>
                    <div className="check-details-text-item"><p>Black Olives</p><p>$0.00</p></div>
                    <div className="check-details-text-item"><p>Mushroom</p><p>$0.00</p></div>
                    <div className="check-details-text-item"><p>Onions</p><p>$0.50</p></div>
                </div>
                <div>
                <div className="check-details-text-total"><p>Total:</p><p>$14.50</p></div>
                </div>
            </div>
        </div>
    )
}

export default CheckPizza