import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    
const pricingOptions =[
    {id: 1, name: 'Free', price: 0},
    {id: 1, name: 'Regular', price:9.99},
    {id: 1, name: 'Premium', price: 19.99},
 
]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono'>Best Deals of the Town</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam doloremque consequatur quidem odio veniam vel non inventore pariatur eligendi sapiente, numquam maxime quod blanditiis reprehenderit aliquam alias ipsam explicabo, veritatis nemo harum. Facilis sequi ullam non eum quae accusamus in error rerum ipsa quam quisquam, nemo neque! Tenetur, dolore nihil.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption 
                        key ={option.id}
                        option={option}
                    >

                    </PricingOption>)
                }
            </div>
            
        </div>
        

    );
};

export default Pricing;