import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Upload Video</Link></li>
                <li><Link to="/videos">All Uploaded Videos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
