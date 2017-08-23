import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './../containers/Home';
import About from './About';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <div className="container">
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" component={ About } />
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
