import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, quote, age, time} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='gym-info'>
            <h4>{name}</h4>
            <p><small>{quote}</small></p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}s</h5>
            </div>
            <button className='btn-add-list'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;