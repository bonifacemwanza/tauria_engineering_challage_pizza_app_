import React from 'react';
import { Link } from 'react-router-dom';


const Choose = () => {
    return (
        <div className="choose-main">
            <div className="choose-top"></div>
            <div className="choose-mid"></div>
             <Link className="choose-next-btn" to="/choosesize"> <p >Next</p></Link>
            <div className="choose-circle"></div>
        </div>
    )
}

export default Choose
