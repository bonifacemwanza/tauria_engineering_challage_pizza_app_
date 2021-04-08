import React, {useState} from 'react';
import {IoReceiptSharp, IoBicycle, IoChevronForward} from 'react-icons/io5';
import {IoMdBriefcase} from 'react-icons/io';
import {RiRestaurantLine} from 'react-icons/ri';
import {AiOutlineCheck, AiFillHome} from 'react-icons/ai';
import {GiCash} from 'react-icons/gi';

import Visa from '../assets/visa.png';



const OrderDetails = () => {
    
    return (
        <div className="order-details-container">
            <div className="order-details-top">
                <IoReceiptSharp/>
                <p>Order Details</p>
            </div>
            <div className="order-details-sub-top-bg"></div>
            <div className="order-details-sub-top">
                <div className="order-details-first">
                    <div>
                        <p className="order-details-head">ORDERED ON</p>
                        <p className="order-details-body">14 Feb</p>
                    </div>
                    <div>
                        <p className="order-details-head">INVOICE #</p>
                        <p className="order-details-body">#15569</p>
                    </div>
                    <div>
                        <p className="order-details-head">TOTAL DUE</p>
                        <p className="order-details-body">$14.50</p>
                    </div>
                </div>
                <div className="order-details-second">
                    <div className="order-details-check-items">
                        <div className="order-details-circle">
                            <AiOutlineCheck/>
                        </div>
                        <div className="order-details-tags">
                            <p>11:41 AM</p>
                            <p><strong>Order Confirmed</strong></p>
                        </div>
                    </div>
                    <div className="order-details-check-items">
                        <div className="order-details-circle">
                            <RiRestaurantLine/>
                        </div>
                        <div className="order-details-tags">
                            <p>12:01 AM</p>
                            <p><strong>Preparing...</strong></p>
                        </div>
                    </div>
                    <div className="order-details-check-items">
                        <div className="order-details-circle-off">
                            <IoMdBriefcase/>
                        </div>
                        <div className="order-details-tags">
                            <p>Dispatch</p>
                        </div>
                    </div>
                    <div className="order-details-check-items">
                        <div className="order-details-circle-off">
                            <IoBicycle/>
                        </div>
                        <div className="order-details-tags">
                            <p>In Transit</p>
                        </div>
                    </div>
                    <div className="order-details-check-items">
                        <div className="order-details-circle-off">
                            <AiFillHome/>
                        </div>
                        <div className="order-details-tags">
                            <p>Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="order-details-line1"></div>
                <div className="order-details-line2"></div>
                <div className="order-details-line3"></div>
                <div className="order-details-line4"></div>
            </div>
            <div className="order-details-footer">
                <div className="order-detials-footer-1">
                    <GiCash/>
                </div>
                <div className="order-detials-footer-2">
                    <p><strong>Earned cashback!</strong></p>
                    <p>+$1.45</p>
                </div>
                <div className="order-detials-footer-3">
                    <IoChevronForward/>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails