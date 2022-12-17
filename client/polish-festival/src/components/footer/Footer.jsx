import "./footer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="up">
<h2>Check out our social media:</h2>
            </div>
            <div className="down">
            <SocialIcon className="icon" network="linkedin" />
            <SocialIcon className="icon" network="twitter" />
            <SocialIcon className="icon" network="facebook" />
            <SocialIcon className="icon" network="instagram" />
            <SocialIcon className="icon" network="snapchat" />
            <SocialIcon className="icon" network="spotify" />
            <SocialIcon className="icon" network="itunes" />
            </div>
        </div>
    )};

    export default Footer