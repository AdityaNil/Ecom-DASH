import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";
const Navlinks = () => {
    const links = [
        {
            path: "/home",
            name: "Home",
        },
        {
            path: "/products",
            name: "Products",
        },
        {
            path: "/donate",
            name: "Donate",
        },
        {
            path: "/about",
            name: "About",
        },
    ];

    return (
        <>
            {links.map((link, index) => (
                <NavLink
                    key={`${link.name}-${index}`}
                    className={({ isActive }) =>
                        isActive ? "act-text text-base mr-8" : "text-base mr-8"
                    }
                    to={link.path}
                >
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default Navlinks;
