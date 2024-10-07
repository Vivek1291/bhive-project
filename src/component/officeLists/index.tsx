

import React from 'react';
import CardView from '../cardView';
import styled from 'styled-components';
import { OfficeDetailsArr } from '../../models/dataJson';
import { useTheme } from '../../context/themeContext';
import Heading from '../heading';

const OfficeListsArr = OfficeDetailsArr;
const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
//   background: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const OfficeListsComponent: React.FC<any> = () => {
    const theme = useTheme();
    return (
        <div>
            <div className='section-container'>
                <div style={{paddingLeft: '16px', marginBottom: '30px'}}>
                    <Heading level={2}>Our Space Overview</Heading>
                </div>
                <ListItemContainer theme={theme}>
                    {
                        OfficeListsArr?.length > 0 &&
                        OfficeListsArr.map((listItem: any, index: number) => {
                            console.log("listimteasfsa: :: ", listItem.distance)
                            return (
                                // <OfficeListContext.provider value={getDetails(listItem)}>
                                    <Item key={index} theme={theme}>
                                        {/* <Item theme={theme}> */}
                                            <CardView 
                                                name = {listItem.name}
                                                images = {listItem.images}
                                                distance = {listItem.distance}
                                                day_pass_price = {listItem.day_pass_price}
                                                day_pass_discounts_percentage = {listItem.day_pass_discounts_percentage}
                                                bulk_pass_price = {listItem.bulk_pass_price}
                                                bulk_pass_days = {listItem.bulk_pass_days}
                                                officeType = {listItem.officeType}
                                                discount = {listItem.day_pass_discounts_percentage}
                                                />
                                        </Item>
                                    // </div>

                                // </OfficeListContext.provider>
                            )
                        })
                    }
                </ListItemContainer>
            </div>
        </div>
    )
}




export default OfficeListsComponent;