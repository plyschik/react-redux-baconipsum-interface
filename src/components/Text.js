import React from 'react';

const Text = (props) => {
    return (
        <div className="well text-justify">{ props.index }. { props.text }</div>
    );
};

export default Text;