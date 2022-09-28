import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <div className='about-self'>
                <h4>Name: Sayeed Nayeem</h4>
                <p>Sylhet, Bangladesh</p>
            </div>
            <div  className='body-details'>
                <div>
                    <h4>75<span>kg</span></h4>
                    <p>Weight</p> 
                </div>
                <div>
                    <h4>6<span>Feet</span></h4>
                    <p>Height</p> 
                </div>
                <div>
                    <h4>25<span>yrs</span></h4>
                    <p>Age</p> 
                </div>
            </div>
            <div>
                <h4 className='give-me-margin'>Add A Break</h4>
                <div className='add-a-break'>
                    <h5>10s</h5>
                    <h5>20s</h5>
                    <h5>30s</h5>
                    <h5>40s</h5>
                    <h5>50s</h5>
                </div>
            </div>
            <div>
                <h4 className='give-me-margin'>Exercise Details</h4>
                <div className='time-maintenance'>
                    <h4>Exercise Time</h4>
                    <p>200s</p>
                </div>
                <div className='time-maintenance'>
                    <h4>Break Time</h4>
                    <p>200s</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;