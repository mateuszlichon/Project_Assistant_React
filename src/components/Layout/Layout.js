import React from 'react';

const layout = (props) => (
    <div className="row">
        <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 bg-info">
            {props.navigation}
        </div>
        <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">
            {props.children}
        </div>
    </div>
);

export default layout;