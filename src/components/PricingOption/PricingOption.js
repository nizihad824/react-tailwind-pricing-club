import React from 'react';

const PricingOption = (props) => {
    console.log("price name ", props);
        const {name,price}=props.option
    return (
        <div>
            <h2 className='bg-indigo-500 py-2 rounded text-xl font-bold'>{name}</h2>
            <span className='text-5xl font-bold'>{price}</span>
            
        </div>
    );
};

export default PricingOption;