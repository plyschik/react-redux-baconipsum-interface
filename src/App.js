import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <h1>react-redux-baconipsum-interface</h1>
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
