import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Womens</span>
                    <span>Mens</span>
                    <span>Shopping</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>This is the about section
                        where the description of the website goes woo woo
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>This is the contact section where
                        the contact information of the store goes
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Fight Club</span>
                    <span className="copyright">© Copywright 2023. All Rights Resevred</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Footer