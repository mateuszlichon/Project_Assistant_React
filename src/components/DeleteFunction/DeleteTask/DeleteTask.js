import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';
import { Button } from 'react-bootstrap';

import axios from '../../../axios-base';

class DeleteTask extends Component {

    submitDeleteHandler = (e) => {
        e.preventDefault();
        axios.delete('/tasks/' + this.props.deleteTask.id)
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
                    <p>Zostało wskazane do skasowania zadanie: {this.props.deleteTask.name}</p>
                    <p>Od tej operacji nie będzie odwotu</p>
                    <p>Czy kontynuować?</p>
                    <Button bsStyle="danger" onClick={this.submitDeleteHandler}>Potwierdź usunięcie</Button>
                </div>
            </Modal>
        )
    }
}

export default DeleteTask;