import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './../components/Text';

class List extends Component {
    render() {
        if (this.props.text.length === 0) {
            return false;
        } else {
            return (
                <div>
                    <hr />
                    { this.props.text.map((text, index) => <Text index={ index + 1 } text={ text } />) }
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    text: state.text
});

export default connect(mapStateToProps)(List);