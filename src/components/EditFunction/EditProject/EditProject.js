import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import Modal from '../../UI/Modal/Modal';

class EditProject extends Component {
    state = {
        name: this.props.editProject.name,
        voivodeship: this.props.editProject.voivodeship
    }

    nameChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ name: value });
    }

    voivodeshipChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ voivodeship: value });
    }

    submitChangeHandler = () => {
        console.log(this.state.name);
        console.log(this.state.voivodeship);
    }

    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Edycja projektu: {this.props.editProject.name}</p>
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
                            <Button bsStyle="warning" onClick={this.submitChangeHandler}>Potwierdź edycję</Button>
                        </FormGroup>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default EditProject;