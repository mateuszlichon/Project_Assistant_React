import React from 'react';

import './Backdrop.css'

const backdrop = (props) => (
    <div className="backdrop" onClick={props.clicked}></div>
    // props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;