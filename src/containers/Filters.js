import React, { Component } from 'react';
import * as actions from './../actions/textActions';
import { connect } from 'react-redux';

class Filters extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Type:</label>
                        <select className="form-control fluid" value={ this.props.type } onChange={ this.props.setType }>
                            <option value="all-meat">all-meat</option>
                            <option value="meat-and-filler">meat-and-filler</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Paras:</label>
                        <input className="form-control fluid" type="number" min="1" max="100" value={ this.props.paras } onChange={ this.props.setParas } />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Start with lorem:</label>
                        <select className="form-control fluid" value={ this.props.startWithLorem } onChange={ this.props.setStartWithLorem }>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>&nbsp;</label>
                        <button className="btn btn-default btn-block" onClick={ this.props.fetchApi } disabled={ this.props.loading }>Load</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    type: state.type,
    paras: state.paras,
    startWithLorem: state.startWithLorem,
    loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
    setType: (event) => {
        dispatch(actions.setType(event));
    },
    setParas: (event) => {
        dispatch(actions.setParas(event));
    },
    setStartWithLorem: (event) => {
        dispatch(actions.setStartWithLorem(event));
    },
    fetchApi: () => {
        dispatch(actions.fetchApi());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);