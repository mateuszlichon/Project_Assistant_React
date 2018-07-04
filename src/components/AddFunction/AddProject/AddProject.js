import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from '../../../axios-base';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';

import Modal from '../../UI/Modal/Modal';

class AddProject extends Component {
    state = {
        id: null,
        name: null,
        voivodeship: null,
        startDate: null,
        endDate: null,
        beneficiary: this.props.beneficiary
    }

    nameChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ name: value });
    }

    voivodeshipChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ voivodeship: value });
        console.log(this.state.voivodeship);
    }

    startDateChangeHandler = (e) => {
        this.setState({ startDate: e });
    }

    endDateChangeHandler = (e) => {
        this.setState({ endDate: e });
    }

    submitChangeHandler = (e) => {
        e.preventDefault();
        const updatedProject = {
            name: this.state.name,
            voivodeship: this.state.voivodeship,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            beneficiary: this.state.beneficiary
        }
        axios.put('/projects', updatedProject)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);

            })
            window.location.reload();
        console.log(this.state.name);
        console.log(this.state.voivodeship);
    }

    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Nowy projekt beneficjenta: {this.props.beneficiary.name}</p>
                    <form>
                        <FormGroup>
                            <ControlLabel>Nazwa projektu</ControlLabel>
                            <FormControl
                                type="text"
                                defaultValue={this.state.name}
                                placeholder="Nazwa projektu"
                                onChange={this.nameChangeHandler}
                            />
                            <ControlLabel>Województwo</ControlLabel>
                            <FormControl
                                type="text"
                                defaultValue={this.state.voivodeship}
                                placeholder="Województwo"
                                onChange={this.voivodeshipChangeHandler}
                            />
                            <ControlLabel>Data rozpoczęcia projektu</ControlLabel><br />
                            <DayPickerInput
                                onDayChange={this.startDateChangeHandler}
                            /><br />
                            <ControlLabel>Data zakończenia projektu</ControlLabel><br />
                            <DayPickerInput
                                onDayChange={this.endDateChangeHandler}
                            />
                            <p><Button bsStyle="success" onClick={this.submitChangeHandler}>Dodaj projekt</Button></p>
                        </FormGroup>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default AddProject;