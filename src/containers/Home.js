import React, { Component } from 'react';
import { setType, setParas, setStartWithLorem, setLoading, setText } from '../actions/textActions';
import { connect } from 'react-redux';
import Filters from './../components/Filters';
import List from './../components/List';
import Loading from './../components/Loading';

class Home extends Component {
    constructor() {
        super();

        this.fetchAPI = this.fetchAPI.bind(this);
    }

    fetchAPI() {
        this.props.setLoading(true);

        fetch('https://baconipsum.com/api/?type=' + this.props.type + '&paras=' + this.props.paras + '&start-with-lorem=' + this.props.startWithLorem)
            .then(response => response.json())
            .then(response => {
                this.props.setText(response);
                this.props.setLoading(false);
            })
        ;
    }

    render() {
        return (
            <div>
                <Filters
                    type={ this.props.type }
                    setType={ this.props.setType }
                    paras={ this.props.paras }
                    setParas={ this.props.setParas }
                    startWithLorem={ this.props.startWithLorem }
                    setStartWithLorem={ this.props.setStartWithLorem }
                    fetchAPI={ this.fetchAPI }
                />
                <List text={ this.props.text } />
                <Loading state={ this.props.loading } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        type:           state.type,
        paras:          state.paras,
        startWithLorem: state.startWithLorem,
        loading:        state.loading,
        text:           state.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setType: (event) => {
            dispatch(setType(event));
        },
        setParas: (event) => {
            dispatch(setParas(event));
        },
        setStartWithLorem: (event) => {
            dispatch(setStartWithLorem(event));
        },
        setLoading: (value) => {
            dispatch(setLoading(value));
        },
        setText: (text) => {
            dispatch(setText(text));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);