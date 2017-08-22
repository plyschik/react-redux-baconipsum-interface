import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';
import List from './List';
import Loading from './Loading';

class Home extends Component {
    constructor(props) {
        super(props);

        this.getText = this.getText.bind(this);
    }

    getText() {
        this.props.setLoading(true);

        fetch('https://baconipsum.com/api/?type=' + this.props.type + '&paras=' + this.props.paras + '&start-with-lorem=' + this.props.startWithLorem)
            .then(response => response.json())
            .then(response => {
                this.props.changeText(response);
                this.props.setLoading(false);
            })
        ;
    }

    render() {
        if (!this.props.loading) {
            return (
                <div>
                    <Filters redux={ this.props } getText={ this.getText } />
                    <hr />
                    <List text={ this.props.text } />
                </div>
            );
        } else {
            return (
                <div>
                    <Filters redux={ this.props } getText={ this.getText } />
                    <hr />
                    <List text={ this.props.text } />
                    <Loading />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        type:           state.type,
        paras:          state.paras,
        startWithLorem: state.startWithLorem,
        loading:        state.loading,
        text:           state.text
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
        },
        setLoading: (value) => {
            dispatch({
                type: 'SET_LOADING',
                payload: value
            });
        },
        changeText: (text) => {
            dispatch({
                type: 'CHANGE_TEXT',
                payload: text
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);