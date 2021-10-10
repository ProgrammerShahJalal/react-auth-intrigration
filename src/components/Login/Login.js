import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const { signinUsingGoogle, signinUsingGitHub } = useAuth()
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signinUsingGoogle}>Google Sign In</button>
            <br /><br />
            <button onClick={signinUsingGitHub}>GitHub Sign In</button>
            <br /> <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;