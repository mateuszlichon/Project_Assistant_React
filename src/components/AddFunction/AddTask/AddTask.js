import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from '../../../axios-base';

import Modal from '../../UI/Modal/Modal';

class EditTask extends Component {
    state = {
        id: null,
        name: null,
        groupAmount: null,
        participantAmount: null,
        project: this.props.project
    }

    nameChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ name: value });
    }

    groupAmountChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ groupAmount: value });
    }

    participantAmountChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ participantAmount: value });
    }

    submitChangeHandler = (e) => {
        e.preventDefault();
        const updatedTask = {
            id: this.state.id,
            name: this.state.name,
            groupAmount: this.state.groupAmount,
            participantAmount: this.state.participantAmount,
            project: this.state.project
        }
        axios.put('/tasks', updatedTask)
            .then(response => {
                console.log(response);
                // this.props.history.push('/manager');
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
                    <p>Nowe zadanie projektu: {this.props.project.name}</p>
                    <form>
                        <FormGroup>
                            <ControlLabel>Nazwa zadania</ControlLabel>
                            <FormControl
                                type="text"
                                defaultValue={this.state.name}
                                placeholder="Nazwa projektu"
                                onChange={this.nameChangeHandler}
                            />
                            <ControlLabel>Liczba grup</ControlLabel>
                            <FormControl
                                type="number"
                                defaultValue={this.state.groupAmount}
                                placeholder="Liczba grup"
                                onChange={this.groupAmountChangeHandler}
                            />
                            <ControlLabel>Liczba uczestników</ControlLabel>
                            <FormControl
                                type="number"
                                defaultValue={this.state.participantAmount}
                                placeholder="Liczba uczestników"
                                onChange={this.participantAmountChangeHandler}
                            />
                            <Button bsStyle="success" onClick={this.submitChangeHandler}>Potwierdź nowe zadanie</Button>
                        </FormGroup>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default EditTask;