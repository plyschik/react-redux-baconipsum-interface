import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './../components/Home';
import About from './About';

const Application = () => ((
    <BrowserRouter>
        <div>
            <Navigation />
            <div className="container">
                <Route exact path="/" component={ Home } />
                <Route exact path="/about" component={ About } />
            </div>
        </div>
    </BrowserRouter>
));

export default Application;
