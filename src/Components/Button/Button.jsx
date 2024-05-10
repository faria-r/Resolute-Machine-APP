import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

const Button = ({value,style}) => {
    
    return (
        <div>
            <button style={style} className='w-full border rounded-sm p-2 text-start  font-bold flex items-center'><FaCircleNotch className='mr-2' /> {value}</button>
        </div>
    );
};

export default Button;