import React from "react";
// import ButtonLink from "../ButtonLink/ButtonLink";
import "./Banner.css";

import bannerImg from "./bannerimg.png";

const Banner = () => {
    return (
        <>
            <div className="container mx-auto flex mb-10 items-center overflow-hidden banner-main">
                <div className="banner-cont">
                    <h1 className="text-3xl font-font-krona mb-4 banner-content">
                        Vintage tee, brand new phone, high heels on,
                        cobblestones.
                    </h1>
                    <p className="text-sm mb-6">
                        Darling, I'm a nightmare dressed like a daydream.
                    </p>
                </div>
                <div className="relative banner-image">
                    <img
                        src={bannerImg}
                        className="h-1/2 w-1/2 relative -scale-x-100 ml-96"
                        alt="leaf-img"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
