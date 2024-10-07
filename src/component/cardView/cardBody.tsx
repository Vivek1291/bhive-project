

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

interface CardBodyProps {
    imageLink: string
}

const ImageContainer = styled.div`
  border-radius: 5px;
  padding: 16px 0px 22px 0px;
}
`;

const Image = styled.img`
    border-radius: 6px;
    height: 175px;
    @media only screen and (min-width: 768px) {
        height: 220px;
    }`

const CardBody: React.FC<CardBodyProps> = (props) => {
    const {imageLink} = props;
    const theme = useTheme();
    return (
        <ImageContainer theme={theme}>
            <Image style={{borderRadius: '6px'}} src={require(`../../${imageLink}`)} alt='' />
        </ImageContainer>
    )
}

export default CardBody;


