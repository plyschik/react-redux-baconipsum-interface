import React from 'react';

const Text = (props) => {
    return (
        <div className="well text-justify">{ props.text }</div>
    );
};

export default Text;