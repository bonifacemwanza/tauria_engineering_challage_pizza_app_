import React, {useState} from 'react';
import {FaShoppingCart, FaWallet} from 'react-icons/fa';
import {MdLocationOn, MdEdit} from 'react-icons/md';
import { Link } from "react-router-dom"



const Checkout = () => {
    const [toggleStick, setToggleStick] = useState(false)
    const [toggle, setToggle] = useState(false)
    const toggleSwitch = () => {
        setToggle(!toggle)
        setToggleStick(!toggleStick)
    }
    return (
        <div className="check-pizza-container">
            <div className="checkout-top">
                <FaShoppingCart/>
                <p>Checkout</p>
            </div>
            <div className="checkpizza-mid">
                
            </div>
            <Link to="/orderdetails" className="choose-next-btn">Place Order</Link>
            <div className="checkout-sub-top-bg"></div>
            <div className="checkout-sub-top">
                <div className="checkout-sub-top-top">
                    <p><MdLocationOn/>&nbsp;Delivery Address</p>
                    <div className="checkout-sub-top-edit"><MdEdit/></div>
                </div>
                <div className="checkout-sub-top-second">
                    <p><strong>Home</strong></p>
                    <p>3728 Brand Road, Swift Current</p>
                </div>
                <div className="checkout-sub-top-third">
                    <p><strong>+ Add Delivery instruction</strong></p>
                </div>
                <div className="checkout-sub-top-forth">
                    <div>
                        <p><strong>Contactless delivery:</strong></p>
                        <p>Rider will place order at your door</p>
                    </div>
                    <div
                        className={`${toggle? 'checkout-sub-top-toggle-on':'checkout-sub-top-toggle-off'}`}
                        onClick={toggleSwitch}>
                        <div
                            className={`${toggleStick? 'checkout-sub-top-toggle-stick-on':'checkout-sub-top-toggle-stick-off'}`}
                            onClick={toggleSwitch}
                        ></div>
                    </div>
                    
                </div>
            </div>
            <div className="checkout-sub-bottom-bg"></div>
            <div className="checkout-sub-bottom">
                <div className="checkout-sub-bottom-top">
                    <p><FaWallet/>&nbsp;Payment method</p>
                    <div className="checkout-sub-top-edit"><MdEdit/></div>
                </div>
                <div className="checkout-sub-mid">
                    <div className="check-out-mid-visa">
                        <div className="check-out-visa-card"></div>
                        <div className="checkout-visa-details">
                            <p><strong>VISA</strong></p>
                            <p>...0145</p>
                        </div>
                    </div>
                    <p className="check-out-price">$14.50</p>
                </div>
                <p className="checkout-cashback">10% CASHBACK APPLIED</p>
                
            </div>
            
        </div>
    )
}

export default Checkout