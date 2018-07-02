import React, { Component } from 'react';
import DeleteFunction from '../DeleteFunction';

class DeleteProject extends Component {
    render() {
        return (
            <DeleteFunction backdropCancel={this.props.backdropCancel}>
                Projekt do skasowania: {this.props.deleteProject.name}
            </DeleteFunction>
        )
    }
}

export default DeleteProject;