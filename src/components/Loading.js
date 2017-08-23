import React from 'react';

const Loading = (props) => {
    if (!props.loading) {
        return false;
    } else {
        return (
            <div className="loading">
                <div>Loading...</div>
            </div>
        );
    }
};

export default Loading;