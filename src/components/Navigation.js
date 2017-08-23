import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link exact to="/" className="navbar-brand">BaconIpsum interface</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link exact to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation