import React, { Component } from 'react';
import axios from '../../axios-base';

import Beneficiary from '../Beneficiary/Beneficiary';
import Projects from '../Projects/Projects';
import DeleteProject from '../DeleteFunction/DeleteProject/DeleteProject';
import EditProject from '../EditFunction/EditProject/EditProject';
import DeleteBeneficiary from '../DeleteFunction/DeleteBeneficiary/DeleteBeneficiary';

class SelectedBeneficiary extends Component {
    state = {
        previousBeneficiary: [],
        selectedBeneficiary: null,
        previousId: null,
        beneficiaryProjects: null,
        deleteBeneficiary: null,
        editBeneficiary: null,
        deleteProject: null,
        editProject: null
    }

    componentDidMount() {
        console.log('mount');
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedBeneficiary) {
            axios.get('/beneficiaries/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedBeneficiary: response.data });
                });
            axios.get('/projects/beneficiary/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ beneficiaryProjects: response.data });
                });
        }
        console.log(this.state.previousId);
        console.log(previousId);
        console.log(this.props.match.params.id);

    }

    componentDidUpdate() {
        if (this.state.selectedBeneficiary !== null && (this.state.selectedBeneficiary !== this.state.previousBeneficiary) && this.state.previousId !== this.props.match.params.id) {
            const previousId = this.props.match.params.id;
            this.setState({ previousId: previousId });
            axios.get('/beneficiaries/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedBeneficiary: response.data });
                });
            axios.get('/projects/beneficiary/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ beneficiaryProjects: response.data });
                });
            const previousBeneficiary = this.state.selectedBeneficiary;
            this.setState({ previousBeneficiary: previousBeneficiary });
        }
    }

    deleteProjectHandler = (deleteProject) => {
        this.setState({ deleteProject: deleteProject });
    }

    editProjectHandler = (editProject) => {
        this.setState({ editProject: editProject })
    }

    deleteBeneficiaryHandler = (deleteBeneficiary) => {
        this.setState({ deleteBeneficiary: deleteBeneficiary });
    }

    editBeneficiaryHandler = (editBeneficiary) => {
        this.setState({ editBeneficiary: editBeneficiary })
    }

    backdropCancelHandler = () => {
        this.setState({ deleteProject: null, editProject: null, deleteBeneficiary: null, editBeneficiary: null });
    }

    render() {
        let selectedBeneficiary = <p>Projekt do wyboru</p>
        let options = null;
        if (this.state.deleteProject) {
            options = <DeleteProject deleteProject={this.state.deleteProject} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.editProject) {
            options = <EditProject editProject={this.state.editProject} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.deleteBeneficiary) {
            options = <DeleteBeneficiary deleteBeneficiary={this.state.deleteBeneficiary} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.editBeneficiary) {
            // options = <EditBeneficiary editBeneficiary={this.state.editBeneficiary} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.selectedBeneficiary && this.state.beneficiaryProjects) {
            selectedBeneficiary = (
                <div>
                    {options}
                    <Beneficiary
                        key={this.state.selectedBeneficiary.id}
                        beneficiary={this.state.selectedBeneficiary}
                        deleteBeneficiary={(deleteBeneficiary) => this.deleteBeneficiaryHandler(deleteBeneficiary)}
                        editBeneficiary={(editBeneficiary) => this.editBeneficiaryHandler(editBeneficiary)}
                    />
                    <br />
                    <Projects
                        projects={this.state.beneficiaryProjects}
                        deleteProject={(deleteProject) => this.deleteProjectHandler(deleteProject)}
                        editProject={(editProject) => this.editProjectHandler(editProject)}
                    />
                </div>
            )
        }
        return (
            selectedBeneficiary
        )
    }

}

export default SelectedBeneficiary;