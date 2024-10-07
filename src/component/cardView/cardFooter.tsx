import React from 'react';
import styled from 'styled-components';
import Button from '../button';

interface CardFooterProps {
    day_pass_price: number,
    day_pass_discounts_percentage: number,
    bulk_pass_price: number,
    bulk_pass_days: number,
}

const CardFooterContainer = styled.div`
  display: flex;
  column-gap: 12px
`;

const CardFooter: React.FC<CardFooterProps> = (props) => {
    const {day_pass_price, day_pass_discounts_percentage, bulk_pass_price, bulk_pass_days} = props;
    return (
        <CardFooterContainer>
            <Button 
                passType = {'dayPass'} 
                passPrice = {day_pass_price} />
            <Button 
                passType = {'bulkPass'}
                passPrice = {bulk_pass_price}
                noOfDays = {bulk_pass_days}
                discount = {day_pass_discounts_percentage}
                variant="primary" />
        </CardFooterContainer>
    )
}

export default CardFooter;