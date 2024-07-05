import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";


export const Footer = () => {

  return (
    <footer className="footer">
        <div className="container-md">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__logo--wrapper">
                        <NavLink to="/" className="logo">Cars Classic Autotrader</NavLink>
                        <a className="privacy hiden-element" href="#!">Privacy Policies</a>
                    </div>
                    <div className="footer__menu">
                        <ul className="footer__menu--list">
                            <li className="footer__menu--item">
                                <NavLink to="/" className="footer__menu--link">Main</NavLink>
                            </li>
                            <li className="footer__menu--item">
                                <NavLink to="/cars" className="footer__menu--link">Cars</NavLink>
                            </li>
                            <li className="footer__menu--item">
                                <NavLink to="/about" className="footer__menu--link">About Us</NavLink>
                            </li>
                            <li className="footer__menu--item">
                                <NavLink to="/services" className="footer__menu--link">Services</NavLink>
                            </li>
                            <li className="footer__menu--item">
                                <NavLink to="/contacts" className="footer__menu--link">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__actions">
                        <a className="footer__actions--phone" href="tel:+17015811331">+1&nbsp;(701) 581-1331</a>
                        <a className="footer__actions--address" href="https://www.google.com/maps/place/Чикаґо,+Іллінойс,+Сполучені+Штати+Америки/@41.8336152,-87.8967695,11z/data=!3m1!4b1!4m6!3m5!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982!16zL20vMDFfZDQ?authuser=0&amp;entry=ttu">161 Trumpeter Ave, Soldotna, Alaska</a>
                        <a className="privacy hiden-element visible" href="#!">Privacy Policies</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom--copy">
                        <p className="footer__bottom--copy-text">© Cars Classic Autotrader 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

