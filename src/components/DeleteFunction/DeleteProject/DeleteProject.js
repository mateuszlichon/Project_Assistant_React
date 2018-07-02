import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';

class DeleteProject extends Component {
    render() {
        return (
            <div>
                <Backdrop clicked={this.props.backdropCancel} />
            </div>
        )
    }
}

export default DeleteProject;