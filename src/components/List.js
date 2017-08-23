import React from 'react';
import Text from './Text';

const List = (props) => {
    if (props.text.length === 0) {
        return false;
    } else {
        return (
            <div>
                <hr />
                { props.text.map((text) => <Text text={ text } />) }
            </div>
        );
    }
};

export default List;