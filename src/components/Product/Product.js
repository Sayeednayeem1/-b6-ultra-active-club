import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, quote, age, time} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='gym-info'>
            <h4>{name}</h4>
            <p><small>{quote}</small></p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}s</h5>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-add-list'>
                <p className='test'>Add To List</p>
            </button>
        </div>
    );
};

export default Product;