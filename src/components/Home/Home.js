import React from 'react';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This is home</h2>
            {user?.displayName && <h3>Welcome {user.displayName}</h3>}
        </div>
    );
};

export default Home;