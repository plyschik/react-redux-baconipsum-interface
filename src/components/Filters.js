import React from 'react';

const Filters = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label>Type:</label>
                    <select className="form-control fluid" value={ props.redux.type } onChange={ props.redux.changeType }>
                        <option value="all-meat">all-meat</option>
                        <option value="meat-and-filler">meat-and-filler</option>
                    </select>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Paras:</label>
                    <input className="form-control fluid" type="number" min="1" max="100" value={ props.redux.paras } onChange={ props.redux.changeParas } />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Start with lorem:</label>
                    <select className="form-control fluid" value={ props.redux.startWithLorem } onChange={ props.redux.changeStartWithLorem }>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>&nbsp;</label>
                    <button className="btn btn-default btn-block" onClick={ props.getText } disabled={ props.redux.loading }>Load</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;