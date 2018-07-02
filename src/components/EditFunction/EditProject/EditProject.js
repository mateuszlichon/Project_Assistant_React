import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';

class EditProject extends Component {
    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Został wskazany do skasowania projekt: {this.props.editProject.name}</p>
                    <p>Od tej operacji nie będzie odwotu</p>
                    <p>Czy kontynuować?</p>
                    <input defaultValue={this.props.editProject.name} />
                </div>
            </Modal>
        )
    }
}

export default EditProject;