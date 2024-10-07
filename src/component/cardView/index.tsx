

import React from 'react';
import { OfficeDetailsInterface } from './cardInterface';
import CardHeader from './cardHeader';
import CardFooter from './cardFooter';
import CardBody from './cardBody';


const CardView: React.FC<OfficeDetailsInterface> = (props) => {

const {name, images, distance, day_pass_price, day_pass_discounts_percentage, bulk_pass_price, bulk_pass_days} = props;
console.log("Distance :: ", distance);
    return <div className="card-view" style={{background: '#fff', padding: '12px', borderRadius: '8px'}}>
        <CardHeader name={name} distance={distance}/>
        <CardBody imageLink={images[0]} />
        <CardFooter 
            day_pass_price={day_pass_price} 
            bulk_pass_price={bulk_pass_price}
            bulk_pass_days={bulk_pass_days}
            day_pass_discounts_percentage={day_pass_discounts_percentage}/>
    </div>
}

export default CardView;

