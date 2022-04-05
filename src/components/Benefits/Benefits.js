import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benefits = (props) => {

    return (
        <p className='flex items-center '><CheckCircleIcon className='w-4 h-4 text-green-400 mr-2'></CheckCircleIcon> Awesome Features</p>
    );
};

export default Benefits;