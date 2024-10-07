import React from "react";
import './style.css';
import Heading from "../heading";
import { useTheme } from "../../context/themeContext";

const CoverSection: React.FC = () => {
    const theme = useTheme();
    return (
        <div>
            <div className="cover-section">
                <div className="conver-content-section">
                    <div className = "hide-on-mobile" style={{fontWeight: 700}}>
                        <Heading level={1}>
                            Host your meeting with world-class amenities. Starting at <span style={{color: theme.primary.main}}>₹199/-!</span>
                        </Heading>
                    </div>
                </div>
            </div>
            <div className = "hide-on-desktop" style={{fontWeight: 600, textAlign: 'center',  marginTop: '17px'}}>
                <Heading level={4}>
                    Host your meeting with world-class amenities. Starting at <span style={{color: theme.primary.main}}>₹199/-!</span>
                </Heading>
            </div>
        </div>
    )
}

export default CoverSection;