import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from '../../../axios-base';

import Modal from '../../UI/Modal/Modal';

class EditBeneficiary extends Component {
    state = {
        id: this.props.editBeneficiary.id,
        name: this.props.editBeneficiary.name
    }

    nameChangeHandler = (e) => {
        let value = e.target.value
        this.setState({ name: value });
    }

    submitChangeHandler = (e) => {
        e.preventDefault();
        const updatedBeneficiary = {
            id: this.state.id,
            name: this.state.name
        }
        axios.put('/beneficiaries', updatedBeneficiary)
            .then(response => {
                console.log(response);
                // this.props.history.push('/manager');
            })
            .catch(error => {
                console.log(error);
                
            })
            window.location.reload();
        console.log(this.state.name);
    }

    render() {
        return (
            <Modal backdropCancel={this.props.backdropCancel}>
                <div>
                    <p>Edycja beneficjenta: {this.props.editBeneficiary.name}</p>
                    <form>
                        <FormGroup>
                            <ControlLabel>Nazwa beneficjenta</ControlLabel>
                            <FormControl
                                type="text"
                                defaultValue={this.state.name}
                                placeholder="Nazwa projektu"
                                onChange={this.nameChangeHandler}
                            />
                            <Button bsStyle="warning" onClick={this.submitChangeHandler}>Potwierdź edycję</Button>
                        </FormGroup>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default EditBeneficiary;