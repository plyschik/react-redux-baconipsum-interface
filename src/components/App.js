import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';

class App extends Component {
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

const mapStateToProps = (state) => {
    return {
        type: state.type,
        paras: state.paras,
        startWithLorem: state.startWithLorem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeType: (type) => {
            dispatch({
                type: 'CHANGE_TYPE',
                payload: type
            });
        },
        changeParas: (paras) => {
            dispatch({
                type: 'CHANGE_PARAS',
                payload: paras
            });
        },
        changeStartWithLorem: (startWithLorem) => {
            dispatch({
                type: 'CHANGE_STARTWITHLOREM',
                payload: startWithLorem
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
