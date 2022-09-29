import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handleAddToCart= (product) =>{
        console.log('this is a test');
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='products-container'>
            <div className='dumbbell-icon-div'>
            <FontAwesomeIcon className='dumbbell-icon' icon={faDumbbell} />
            <h1>ABSOLUTE-FITNESS-CLUB</h1>
            </div>
            <h2 className='today-exercise'>Select Todays Exercise</h2>
            <div className='gym-section'>
                <div className='gym-container'>
                    {
                        products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='exercise-details'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;