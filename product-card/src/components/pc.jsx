import React from 'react';
import './pc.css';

export const Pc = (props) => {
    const { title, desc, price, img } = props; 
    return (
        <div className='pc'>
            <img src={img} />
            <p>{title}</p>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    );
};

export default Pc;
