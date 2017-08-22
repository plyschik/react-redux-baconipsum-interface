import React from 'react';

const Filters = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <select className="form-control fluid" value={ props.redux.type } onChange={ props.redux.changeType }>
                    <option value="all-meat">all-meat</option>
                    <option value="meat-and-filler">meat-and-filler</option>
                </select>
            </div>
            <div className="col-md-3">
                <input className="form-control fluid" type="text" value={ props.redux.paras } onChange={ props.redux.changeParas } />
            </div>
            <div className="col-md-3">
                <select className="form-control fluid" value={ props.redux.startWithLorem } onChange={ props.redux.changeStartWithLorem }>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div className="col-md-3">
                <button className="btn btn-default btn-block">Load</button>
            </div>
        </div>
    );
};

export default Filters;