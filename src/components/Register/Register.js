import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" name="Email" /> <br /> <br />
                <input type="password" name="Pssword" />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Register;