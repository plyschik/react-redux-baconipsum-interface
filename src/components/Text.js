import React from 'react';

const Text = (props) => {
    if (props.text.length == 0) {
        return (
            <div className="alert alert-info">Set filters and load text.</div>
        );
    } else {
        const text = props.text.map((text) => <div className="well text-justify">{ text }</div>);

        return (
            <div>
                { text }
            </div>
        );
    }
};

export default Text;