import React, { Component } from 'react';
import axios from '../../axios-base';

import MainProject from '../Projects/Project/MainProject';
import Tasks from '../Tasks/Tasks';
import DeleteProject from '../DeleteFunction/DeleteProject/DeleteProject';
import EditProject from '../EditFunction/EditProject/EditProject';

class SelectedProject extends Component {
    state = {
        previousProject: [],
        previousId: null,
        selectedProject: null,
        projectTasks: null,
        deleteProject: null,
        editProject: null
    }

    componentDidMount() {
        console.log('/projects/');
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedProject) {
            axios.get('/projects/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedProject: response.data });
                });
            axios.get('/tasks/project/' + this.props.match.params.id)
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
            axios.get('/projects/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedProject: response.data, previousId: this.props.match.params.id });
                });
            axios.get('/tasks/project/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ projectTasks: response.data });
                });
            const previousProject = this.state.selectedProject;
            this.setState({ previousProject: previousProject });
            console.log('after ' + this.state.previousId);
        }
    }

    deleteProjectHandler = (deleteProject) => {
        this.setState({deleteProject: deleteProject});
    }

    editProjectHandler = (editProject) => {
        this.setState({editProject: editProject})
    }

    backdropCancelHandler = () => {
        this.setState({deleteProject: null, editProject: null});
    }

    render() {
        let selectedProject = <p>Projekt do wyboru</p>;
        let options = null;
        if (this.state.deleteProject) {
            options = <DeleteProject deleteProject={this.state.deleteProject} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.editProject) {
            options = <EditProject editProject={this.state.editProject} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.selectedProject && this.state.projectTasks) {
            // console.log(this.state.selectedProject.name);
            selectedProject = (
                <div>
                    {options}
                    <MainProject
                        project={this.state.selectedProject}
                        deleteProject={(deleteProject) => this.deleteProjectHandler(deleteProject)}
                        editProject={(editProject) => this.editProjectHandler(editProject)}
                    />
                    <br />
                    <Tasks
                        tasks={this.state.projectTasks}
                        selectedTask={(selectedTask) => this.selectedTask(selectedTask)}
                    />
                </div>
            )
        }
        return (
            selectedProject
        )
    }
}

export default SelectedProject;