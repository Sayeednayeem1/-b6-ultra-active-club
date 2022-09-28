import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <h2>Absolute Fitness</h2>
            <nav>
                <a href="./">Home</a>
                <a href="./">About</a>
                <a href="./">Info</a>
                <a href="./">Contact</a>
            </nav>
        </div>
    );
};

export default Header;