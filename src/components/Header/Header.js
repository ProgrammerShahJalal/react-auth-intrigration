import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            {user?.email && <button onClick={logout}>logout</button>}
        </div>
    );
};

export default Header;