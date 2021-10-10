import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/shipping'> Shipping</Link>
            <Link to='/placeorder'>Place Order</Link>
            <span>{user.displayName} </span>
            {user?.displayName && <button onClick={logout}>logout</button>}
        </div>
    );
};

export default Header;