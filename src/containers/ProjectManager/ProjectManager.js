import React, { Component } from 'react';
import axios from 'axios';

import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';
import SelectedBeneficiary from '../../components/SelectedComponents/SelectedBeneficiary';

class ProjectManager extends Component {
    state = {
        beneficiaries: [],
        previousBeneficiary: [],
        selectedBeneficiary: null,
        beneficiaryProjects: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
            });
    }

    componentDidUpdate() {
        if (this.state.selectedBeneficiary !== null && (this.state.selectedBeneficiary !== this.state.previousBeneficiary)) {
                axios.get('http://localhost:8080/projects/beneficiary/' + this.state.selectedBeneficiary.id)
                    .then(response => {
                        this.setState({ beneficiaryProjects: response.data });
                    });
            const previousBeneficiary = this.state.selectedBeneficiary;
            this.setState({
                previousBeneficiary: previousBeneficiary
            });
        }
    }

    selectedBeneficiaryHandler = (beneficiary) => {
        const previousBeneficiary = this.state.selectedBeneficiary;
        this.setState({
            previousBeneficiary: previousBeneficiary,
            selectedBeneficiary: beneficiary
        });
    }

    selectedProjectHandler = (project) => {
        console.log(project);
        const previousProject = this.state.selectedProject;
        this.setState({
            previousProject: previousProject,
            selectedProject: project
        });
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm-3 bg-info">
                    <br />
                    <NavigationPanel
                        clickBeneficiary={(beneficiary) => this.selectedBeneficiaryHandler(beneficiary)}
                        beneficiaries={this.state.beneficiaries}
                        clickProject={(project) => this.selectedProjectHandler(project)}
                        />
                </div>
                <SelectedBeneficiary
                    selectedBeneficiary={this.state.selectedBeneficiary}
                    beneficiaryProjects={this.state.beneficiaryProjects} />
            </div>

        )
    }
}

export default ProjectManager;