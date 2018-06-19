import React, { Component } from 'react';
import axios from 'axios';

import Project from '../Projects/Project/Project';
import Tasks from '../Tasks/Tasks';
import ManagerNavigationPanel from '../NavigationPanel/ManagerNavigationPanel/ManagerNavigationPanel';

class SelectedProject extends Component {
    state = {
        previousProject: [],
        previousId: null,
        selectedProject: null,
        projectTasks: null
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.previousId !== this.props.match.params.id;
    // }

    componentDidMount() {
        console.log('mount');
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedProject) {
            axios.get('http://localhost:8080/projects/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedProject: response.data });
                });
            axios.get('http://localhost:8080/tasks/project/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ projectTasks: response.data });
                });
        }
        console.log(this.state.previousId);
        console.log(previousId);
        console.log(this.props.match.params.id);

    }

    componentDidUpdate() {
        console.log('update start');

        if (this.state.selectedProject !== null && (this.state.selectedProject !== this.state.previousProject) && this.state.previousId !== this.props.match.params.id) {

            console.log('update during');
            console.log('before ' + this.state.previousId);
            console.log(this.props.match.params.id);
            // console.log(this.state.selectedProject);
            // console.log(this.state.previousProject);
            axios.get('http://localhost:8080/projects/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedProject: response.data, previousId: this.props.match.params.id });
                });
            axios.get('http://localhost:8080/tasks/project/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ projectTasks: response.data });
                });
            const previousProject = this.state.selectedProject;
            this.setState({ previousProject: previousProject });
            console.log('after ' + this.state.previousId);
        }
    }

    render() {
        let selectedProject = <p>Projekt do wyboru</p>

        if (this.state.selectedProject && this.state.projectTasks) {
            // console.log(this.state.selectedProject.name);
            selectedProject = (
                <div className="row">
                    <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 bg-info">
                        <ManagerNavigationPanel />
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">
                        <div className="card-deck"><Project
                            name={this.state.selectedProject.name}
                            voivodeship={this.state.selectedProject.voivodeship} /></div>
                        <br />
                        <Tasks
                            tasks={this.state.projectTasks}
                            selectedTask={(selectedTask) => this.selectedTask(selectedTask)}
                        />
                    </div>
                </div>
            )
        }
        return (
            selectedProject
        )
    }
}

export default SelectedProject;