import React from "react";
import { Link } from "react-router-dom";
import brandlogo from "../Header/brand_logo.png";
import "./Footer.css";
const Footer = () => {
    const links = ["About", "Clothing", "Footwear", "Makeup", "Contact"];

    return (
        <div className="bg-dark text-light flex justify-between px-6 py-6">
            <Link to="/" className="text-2xl text-yellow font-font-krona">
                <img className="brand-logo-footer" src={brandlogo} alt="dash" />
            </Link>
            <div className="flex items-center">
                {links.map((link, index) => (
                    <Link key={`${link}-${index}`} to="/" className="ml-4">
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Footer;
