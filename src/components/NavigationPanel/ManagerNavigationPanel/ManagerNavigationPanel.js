import React, {Component } from 'react';
import axios from 'axios';

import NavigationPanel from '../../NavigationPanel/NavigationPanel';
import SelectedBeneficiary from '../../SelectedComponents/SelectedBeneficiary';
import SelectedProject from '../../SelectedComponents/SelectedProject';
import SelectedTask from '../../SelectedComponents/SelectedTask';

class ManagerNavigationPanel extends Component {
    state = {
        beneficiaries: [],
        previousBeneficiary: [],
        selectedBeneficiary: null,
        beneficiaryProjects: [],
        previousProject: [],
        selectedProject: null,
        projectTasks: [],
        previousTask: [],
        selectedTask: null
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

        if (this.state.selectedProject !== null && (this.state.selectedProject !== this.state.previousProject)) {
            axios.get('http://localhost:8080/tasks/project/' + this.state.selectedProject.id)
                .then(response => {
                    this.setState({ projectTasks: response.data });
                    // console.log(response.data);
                });
            const previousProject = this.state.selectedProject;
            this.setState({
                previousProject: previousProject
            });
        }
    }

    render() {
        let pageOutput = <h3>@Ekran powitalny i wiadomości porównawcze@</h3>
        if (this.state.selectedBeneficiary !== null) {
            pageOutput = <SelectedBeneficiary
                selectedBeneficiary={this.state.selectedBeneficiary}
                beneficiaryProjects={this.state.beneficiaryProjects}
                clickProject={(project) => this.selectedProjectHandler(project)} />
        }

        if (this.state.selectedProject !== null) {
            pageOutput = <SelectedProject
                selectedProject={this.state.selectedProject}
                projectTasks={this.state.projectTasks}
                selectedTask={(task) => this.selectedTaskHandler(task)}
            />
        }

        if (this.state.selectedTask !== null) {
            pageOutput = <SelectedTask
                selectedTask={this.state.selectedTask}
            />
        }

        return (
            <div className="row">
                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 bg-info">
                    <br />
                    <NavigationPanel
                        clickBeneficiary={(beneficiary) => this.selectedBeneficiaryHandler(beneficiary)}
                        beneficiaries={this.state.beneficiaries}
                        clickProject={(project) => this.selectedProjectHandler(project)}
                        selectedTask={(task) => this.selectedTaskHandler(task)}
                    />
                </div>
                <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">
                    {pageOutput}
                </div>
            </div>

        )
    }
}

export default ManagerNavigationPanel;