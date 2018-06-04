import React, { Component } from 'react';
import axios from 'axios';

import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';
import SelectedBeneficiary from '../../components/SelectedComponents/SelectedBeneficiary';
import Project from '../../components/Projects/Project/Project';

class ProjectManager extends Component {
    state = {
        beneficiaries: [],
        previousBeneficiary: [],
        selectedBeneficiary: null,
        beneficiaryProjects: [],
        selectedProject: null
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

        // if (this.state.selectedProject !== null && (this.state.selectedProject !== this.state.previousProject)) {
        //     axios.get('http://localhost:8080/projects/' + this.state.selectedProject.id)
        //         .then(response => {
        //             // this.setState({ beneficiaryProjects: response.data });
        //             console.log(response.data);
        //         });
        //     const previousProject = this.state.selectedProject;
        //     this.setState({
        //         previousProject: previousProject
        //     });
        // }
    }

    selectedBeneficiaryHandler = (beneficiary) => {
        const previousBeneficiary = this.state.selectedBeneficiary;
        this.setState({
            previousBeneficiary: previousBeneficiary,
            selectedBeneficiary: beneficiary,
            selectedProject: null
        });
    }

    selectedProjectHandler = (project) => {
        console.log(project);
        const previousProject = this.state.selectedProject;
        this.setState({
            selectedBeneficiary: null,
            selectedProject: project
        });
    }

    render() {
        let pageOutput = <h3>Witamy w programie Project Assistant. Proszę wybrać projekt lub beneficjenta</h3>
        if (this.state.selectedBeneficiary !== null) {
            pageOutput = <SelectedBeneficiary
            selectedBeneficiary={this.state.selectedBeneficiary}
            beneficiaryProjects={this.state.beneficiaryProjects} />
        }

        if(this.state.selectedProject !== null) {
            pageOutput = <Project
                name={this.state.selectedProject.name}
                voivodeship={this.state.selectedProject.voivodeship} />
        }

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
                {pageOutput}
            </div>

        )
    }
}

export default ProjectManager;