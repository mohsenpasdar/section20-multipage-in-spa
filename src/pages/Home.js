import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>My Homepage</h1>
            <p>Go to <Link to='products'>list of products</Link>.</p>
        </div>
    );
};

export default Home;