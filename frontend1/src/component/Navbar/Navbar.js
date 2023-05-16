import React from "react";
import { NavLink } from "react-router-dom";
import Navlinks from "../Navlinks/Navlinks";
import Shoppinbag from "../icons/Shoppinbag";
import Usericon from "../icons/Usericon";
import brandlogo from "../layout/Header/brand_logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-box">
            <nav className="flex justify-between pb-3 font-font-krona container mx-auto px-6">
                <NavLink className="text-2xl" to="/home">
                    <img className="brand-logo" src={brandlogo} alt="dash" />
                </NavLink>
                <div className="flex items-end options">
                    <Navlinks />
                    <div className="flex ">
                        <NavLink to="/login">
                            <Usericon />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
