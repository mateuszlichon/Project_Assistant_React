import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = (props) => (
    <div>
        <Backdrop clicked={props.backdropCancel} />
        <div className="modal-css">
            {props.children}
        </div>
    </div>
)

export default modal;