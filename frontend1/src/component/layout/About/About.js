import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    return (
        <div className="aboutSection">
            <div className="about-us mx-auto w-3/5 mt-16 mb-28">
                <div className="mx-auto w-24 mb-4 font-font-krona heading-about">
                    About Us!
                </div>
                <p className="font-font-base">
                    Welcome to dash - the ultimate online shopping destination!
                    At dash, we are passionate about creating a seamless and
                    enjoyable shopping experience for our customers. Our
                    platform offers a wide range of products from top brands and
                    retailers, all in one place. But we're more than just an
                    online store. We believe in giving back to the community and
                    empowering our users to make a difference. That's why we
                    have introduced a unique points system, where users can earn
                    points by donating their unwanted items. These points can be
                    redeemed for discounts on our platform, making shopping even
                    more rewarding. Our team is committed to providing excellent
                    customer service and ensuring that your shopping experience
                    with us is smooth and hassle-free. We constantly strive to
                    improve our platform and bring you the latest products and
                    trends. So why choose dash for your online shopping needs?
                    With our user-friendly platform, extensive product range,
                    and innovative points system, we believe we offer a truly
                    unique and rewarding experience for our customers. Join us
                    today and start shopping with dash!
                </p>
            </div>
        </div>
    );
};

export default About;
