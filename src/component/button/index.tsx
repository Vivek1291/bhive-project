

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

interface ButtonProps {
    variant? : 'primary' | 'secondary',
    children?: React.ReactNode | string,
    passType: 'dayPass' | 'bulkPass',
    passPrice: number,
    noOfDays?: number,
    discount?: number
}

const ButtonStyle = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.primary.main : theme.secondary.main};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.primary.text : theme.secondary.text};
  border: 1px solid ${({ variant, theme }) =>
    variant === 'primary' ? theme.primary.stroke : theme.secondary.stroke}; // Use stroke color
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  flex: 1;
  @media only screen and (max-width: 1440px) {
    padding: 10px 8px;
  }
`;

const ActionContentStyling = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const DiscountStyle = styled.div`
  background: ${({ theme }) => theme.black.main};
  color: #FFFDF7;
  font-size: 9px;
  font-weight: 500;
  padding: 4px 9px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -8px;
`;

const Button: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const {variant, passType, discount, passPrice, noOfDays} = props;
  return <ButtonStyle variant={variant} theme={theme}>
    <ActionContentStyling theme={theme}>
        <div>
            <div style={{color: theme.text.secondary, fontWeight: 500, textAlign: 'left'}}>{passType === 'dayPass' ? 'Day Pass' : 'Bulk Pass'}</div>
            <div><span style={{...theme.typography.heading6, color: theme.text.main, fontWeight: 600}}>₹ {passPrice}</span><span style={{fontSize: '12px', color: theme.text.secondary, fontWeight: 500}}>/{noOfDays ? noOfDays : ''}{passType === 'dayPass' ? 'Day' : 'Days'}</span> </div>
        </div>
        <div style={{color: theme.grey.grey6, fontWeight: 500}}>
            <span style={{opacity: '40%'}}>{'>'}</span>
            <span style={{opacity: '60%'}}>{'>'}</span>
            <span style={{}}>{'>'}</span>
        </div>
    </ActionContentStyling>
    {
        discount && discount > 0 && 
        <DiscountStyle theme={theme}>{discount}% discount</DiscountStyle>
    }
  </ButtonStyle>;
};

export default Button;


