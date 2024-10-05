import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (

        <div className="newsletter">
            <div className="letter-heading" > <h1>Get Exclusive Offer On Your Email</h1> </div>
            <div className="letter-input"> <p>Subscribe to our newsletter and stay updated.</p> </div>
            <div className="letter-email" > 
                <input type="email" placeholder="Enter Your Email Here" />
                <button>Subscribe</button>
            </div>

        </div>
    )

}

export default Newsletter;