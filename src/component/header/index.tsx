import React from "react";
import Logo from '../../static_assets/bhiveLogo.svg';
import CallIcon from '../../static_assets/CallIcon.svg';
import './style.css';

const Header: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-fixed">
                <div className="navbar-content container">
                    <div className="navbar-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="contact-icon">
                        <img src={CallIcon} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;