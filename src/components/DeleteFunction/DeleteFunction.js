import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';

import './DeleteFunction.css';

const deleteFunction = (props) => (
    <div>
        <Backdrop clicked={props.backdropCancel} />
        <div className="deleteFunction">
            {props.children}
        </div>
    </div>
)

export default deleteFunction;