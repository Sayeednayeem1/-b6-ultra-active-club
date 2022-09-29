import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    // this is a test section
    const getLocalItems = ()=>{
        let list = localStorage.getItem('list');
        if(list){
            return JSON.parse(localStorage.getItem('list'))
        }
        else{
            return 0;
        }
    }


    let [test, setTest] = useState(getLocalItems);
    useEffect(() =>{
        localStorage.setItem('list', JSON.stringify(test))
    }, [test]);

    const btnOne = ()=>{
        test = 10;
        setTest(test);
        // localStorage.setItem("btnOne", 10)
    }
    const btnTwo = ()=>{
        test = 20;
        setTest(test);
        // localStorage.setItem("btnTwo", 20)
    }
    const btnThree = ()=>{
        test = 30
        setTest(test);
        // localStorage.setItem("btnThree", 30)
    }
    const btnFour = ()=>{
        test = 40;
        setTest(test);
        // localStorage.setItem("btnFour", 40)
    }
    const btnFive = ()=>{
        test = 50;
        setTest(test);
        // localStorage.setItem("btnFive", 50)
    }
    // simple alert
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
                <div className='icon-location'>
                    <FontAwesomeIcon className='icon-margin' icon={faLocationDot} />
                    <p>Sylhet, Bangladesh</p>
                </div>
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
                    <button onClick={btnOne}>10s</button>
                    <button onClick={btnTwo}>20s</button>
                    <button onClick={btnThree}>30s</button>
                    <button onClick={btnFour}>40s</button>
                    <button onClick={btnFive}>50s</button>
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