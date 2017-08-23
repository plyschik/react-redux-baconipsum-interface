import React from 'react';
import Text from './Text';

const List = (props) => {
    if (props.text.length === 0) {
        return (
            <div className="alert alert-success">Set filters and load text.</div>
        );
    } else {
        return (
            <div>
                { props.text.map((text) => <Text text={ text } />) }
            </div>
        );
    }
};

export default List;