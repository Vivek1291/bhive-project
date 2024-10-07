import React from 'react';
import { MdOutlineAssistantDirection } from "react-icons/md";
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

interface CardHeaderProps {
    name: string,
    distance: number
}

const DirectionBox = styled.div`
  background-color: ${({ theme }) => theme.secondary.main};
  color: ${({theme }) => theme.secondary.text};
  border-radius: 6.47px;
  padding: 10px;
  cursor: pointer;
  border: 0.47px solid #EEE7E7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 52px;
  height: 52px;
`;

const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const {name, distance} = props;
    const theme = useTheme();
    return (
        <div className="flex align-center justify-space-between">
            <div style={{...theme.typography.heading4, fontWeight: 500}}>{name}</div>
            <DirectionBox theme={theme}>
                <div>
                    <MdOutlineAssistantDirection />
                </div>
                <div style={{fontSize: '8px', fontWeight: 500}}>{distance} kms</div>
            </DirectionBox>
        </div>
    )
}

export default CardHeader;