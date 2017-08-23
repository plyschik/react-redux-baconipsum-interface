import React from 'react';
import Text from './Text';

const List = (props) => {
    if (props.text.length === 0) {
        return false;
    } else {
        return (
            <div>
                <hr />
                { props.text.map((text, index) => <Text index={ index + 1 } text={ text } />) }
            </div>
        )
    }
};

export default List;