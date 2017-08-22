import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import '../main.css';

export default class App extends Component {
    render() {
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
        );
    }
}
