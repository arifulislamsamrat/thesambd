import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <div className='navbar'>
              <div className="logo">
                
                <Link to="/"><img src="src\assets\logo.png" alt="" /></Link>
              </div>
              <div className='allLink'>
              <Link to="/catalogue">Catalogue</Link>
               <Link to="/accessories">Acessories</Link>
               <Link to="/news">News</Link>
               <Link to="/service">Service</Link>
              </div>
              <div className='inputContainer'>
                <input className='searchBox' type='text' placeholder='search any item'  />
                <input className='searchSubmit' type="submit" value="search" />
              </div>
               
            </div>

        </>
    );
};

export default Header;