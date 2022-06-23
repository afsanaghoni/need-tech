import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Link to='/'>Need Tech</Link>

            </div>
            <div className="menu-container">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/videos'>Videos</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>


            </div>
        </div>
    );
};

export default Navbar;