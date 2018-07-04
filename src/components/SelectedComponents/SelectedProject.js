import React, { Component } from 'react';
import axios from '../../axios-base';

import MainProject from '../Projects/Project/MainProject';
import Tasks from '../Tasks/Tasks';
import DeleteProject from '../DeleteFunction/DeleteProject/DeleteProject';
import EditProject from '../EditFunction/EditProject/EditProject';
import DeleteTask from '../DeleteFunction/DeleteTask/DeleteTask';
import EditTask from '../EditFunction/EditTask/EditTask';
import {Button} from 'react-bootstrap';

class SelectedProject extends Component {
    state = {
        previousProject: [],
        previousId: null,
        selectedProject: null,
        projectTasks: null,
        deleteProject: null,
        editProject: null,
        deleteTask: null,
        editTask: null
    }

    componentDidMount() {
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

    }

    componentDidUpdate() {
        console.log('update start');

        if (this.state.selectedProject !== null && (this.state.selectedProject !== this.state.previousProject) && this.state.previousId !== this.props.match.params.id) {
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
        }
    }

    deleteProjectHandler = (deleteProject) => {
        this.setState({ deleteProject: deleteProject });
    }

    editProjectHandler = (editProject) => {
        this.setState({ editProject: editProject })
    }

    deleteTaskHandler = (deleteTask) => {
        this.setState({ deleteTask: deleteTask });
    }

    editTaskHandler = (editTask) => {
        this.setState({ editTask: editTask })
    }

    backdropCancelHandler = () => {
        this.setState({ deleteProject: null, editProject: null, deleteTask: null, editTask: null });
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

        if (this.state.deleteTask) {
            options = <DeleteTask deleteTask={this.state.deleteTask} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.editTask) {
            options = <EditTask editTask={this.state.editTask} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.selectedProject && this.state.projectTasks) {
            selectedProject = (
                <div>
                    {options}
                    <h3 className="selectedComponentsHeadlines">Wybrany projekt:</h3>
                    <MainProject
                        project={this.state.selectedProject}
                        deleteProject={(deleteProject) => this.deleteProjectHandler(deleteProject)}
                        editProject={(editProject) => this.editProjectHandler(editProject)}
                    />
                    <br />
                    <h3 className="selectedComponentsHeadlines">Zadania wybranego projektu (kliknij aby rozwinąć):</h3>
                    <Tasks
                        tasks={this.state.projectTasks}
                        selectedTask={(selectedTask) => this.selectedTask(selectedTask)}
                        deleteTask={(deleteTask) => this.deleteTaskHandler(deleteTask)}
                        editTask={(editTask) => this.editTaskHandler(editTask)}
                    />
                    <Button block bsStyle="success" onClick={() => this.addTaskHandler(this.state.selectedProject)}>Dodaj zadanie</Button>
                </div>
            )
        }
        return (
            selectedProject
        )
    }
}

export default SelectedProject;