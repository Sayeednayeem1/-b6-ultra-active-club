import React, { useState } from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let [test, setTest] = useState(0);

    const thisIsTest = ()=>{
        test = 10;
        setTest(test);
    }
    const thisIsTest2 = ()=>{
        test = 20;
        setTest(test);
    }
    const thisIsTest3 = ()=>{
        test = 30
        setTest(test);
    }
    const thisIsTest4 = ()=>{
        test = 40;
        setTest(test);
    }
    const thisIsTest5 = ()=>{
        test = 50;
        setTest(test);
    }
    // toast me
    const toast = ()=>{
        return alert('This is a simple alert!');
    }

    let time = 0;
    for(const product of cart){
        time = time + product.time;
    }
    return (
        <div className='cart'>
            <div className='about-self'>
                <h4>Name: Sayeed Nayeem</h4>
                <p>Sylhet, Bangladesh</p>
            </div>
            <div  className='body-details'>
                <div>
                    <h4>67<span>kg</span></h4>
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
                    <button onClick={thisIsTest}>10s</button>
                    <button onClick={thisIsTest2}>20s</button>
                    <button onClick={thisIsTest3}>30s</button>
                    <button onClick={thisIsTest4}>40s</button>
                    <button onClick={thisIsTest5}>50s</button>
                </div>
            </div>
            <div>
                <h4 className='give-me-margin'>Exercise Details</h4>
                <div className='time-maintenance'>
                    <h4>Exercise Time</h4>
                    <p>{time}s</p>
                </div>
                <div className='time-maintenance'>
                    <h4>Break Time</h4>
                    <p>{test}s</p>
                </div>
            </div>
            <div className='activity-details-btn'>
                <button onClick={toast} className='btn'>
                    <p>Activity Computed</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;