import React from "react";
import './style.css';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import PlayStoreIcon from '../../static_assets/playStoreDownload.svg';
import AppleStoreIcon from '../../static_assets/appleStoreDownload.svg';
import AppImage from '../../static_assets/appdownload1.svg';
import Heading from "../heading";

const DownloadAppSection = styled.div`
`;

const DownloadAppContent = styled.div`
    position: relative;
    border-radius: 1rem;
    background: rgb(255, 255, 255);
    padding: 70px 40px 27px 0px;
    margin: 200px 0px 40px;
    box-shadow: rgb(224, 224, 224) 0px 1px 8px 0px;
    @media (max-width: 900px) {
        margin-top: 18px;
        height: 392px;
        padding: 27px 12px 12px;
        align-items: baseline;
        justify-content: flex-end;
    }
`;
const DownloadAppImage = styled.img`
    position: absolute;
    left: 10px;
    width: 400px;
    bottom: 0;
    @media (max-width: 900px) {
        height: 300px;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
    }
`;
const DownloadAppText = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    color: #605F5F;
    position: relative;

    @media (max-width: 900px) {
        margin-top: 18px;
        height: 357px;
        padding: 27px 12px 12px;
        align-items: baseline;
        justify-content: flex-end;
    }
`;

const AppDownloadSection: React.FC = () => {

    return (
        <DownloadAppSection className="download-app-section">
            <div className="section-container">

                <Heading level={2}>Download our app now</Heading>
                <DownloadAppContent className="download-app-content">
                    <DownloadAppImage className="download-app-image" src={AppImage} alt='' />
                    <DownloadAppText className="download-app-text">
                        <div style={{width: '400px'}}>
                            <div className="hide-on-mobile margin-b-39">Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</div>
                            <div className="flex align-center col-gap-12 col-gap-30">
                                <div style={{width: '146px'}}>
                                    <img style={{cursor: 'pointer'}} src={PlayStoreIcon} alt="" />
                                </div>
                                <div style={{width: '146px'}}>
                                    <img style={{cursor: 'pointer'}} src={AppleStoreIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </DownloadAppText>
                </DownloadAppContent>
            </div>
        </DownloadAppSection>
    )
}

export default AppDownloadSection;