import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';

class DeleteProject extends Component {
    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Został wskazany do skasowania projekt: {this.props.deleteProject.name}</p>
                    <p>Od tej operacji nie będzie odwotu</p>
                    <p>Czy kontynuować?</p>
                </div>
            </Modal>
        )
    }
}

export default DeleteProject;