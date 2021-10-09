import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signinUsingGoogle } = useFirebase()
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signinUsingGoogle}>Google Sign In</button>
            <br /> <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;