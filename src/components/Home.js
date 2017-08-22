import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';

class Home extends Component {
    render() {
        return (
            <div>
                <Filters redux={ this.props } />
                <h1>Home</h1>
            </div>
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
        changeType: (event) => {
            dispatch({
                type: 'CHANGE_TYPE',
                payload: event.target.value
            });
        },
        changeParas: (event) => {
            dispatch({
                type: 'CHANGE_PARAS',
                payload: event.target.value
            });
        },
        changeStartWithLorem: (event) => {
            dispatch({
                type: 'CHANGE_STARTWITHLOREM',
                payload: event.target.value
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);