import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';
import { Button } from 'react-bootstrap';

import axios from '../../../axios-base';

class DeleteProject extends Component {

    submitDeleteHandler = (e) => {
        e.preventDefault();
        axios.delete('/projects/' + this.props.deleteProject.id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                
            })
            window.location.reload();
    }

    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Został wskazany do skasowania projekt: {this.props.deleteProject.name}</p>
                    <p>Od tej operacji nie będzie odwotu</p>
                    <p>Czy kontynuować?</p>
                    <Button bsStyle="danger" onClick={this.submitDeleteHandler}>Potwierdź usunięcie</Button>
                </div>
            </Modal>
        )
    }
}

export default DeleteProject;