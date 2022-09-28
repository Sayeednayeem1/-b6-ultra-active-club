import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='products-container'>
            <div>
            <p>add an icon</p>
            <h1>ULTRA-ACTIVE-CLUB</h1>
            </div>
            <h4>Select Todays Exercise</h4>
            <div className='gym-section'>
                <div className='gym-container'>
                    {
                        products.map(product => <Product
                        product={product}
                        key={product.id}
                        ></Product>)
                    }
                </div>
                <div className='exercise-details'>
                    <h4>This is a test</h4>
                </div>
            </div>
        </div>
    );
};

export default Products;