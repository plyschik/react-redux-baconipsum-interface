import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
    render() {
        if (!this.props.loading) {
            return false;
        } else {
            return (
                <div className="loading">
                    <div>Loading...</div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps)(Loading);