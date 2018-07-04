import React, { Component } from 'react';
import axios from '../../axios-base';

import MainTask from '../Tasks/Task/MainTask';
import DeleteTask from '../DeleteFunction/DeleteTask/DeleteTask';
import EditTask from '../EditFunction/EditTask/EditTask';

class SelectedTask extends Component {
    state = {
        previousTask: [],
        previousId: null,
        selectedTask: null,
        deleteTask: null,
        editTask: null
    }

    componentDidMount() {
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedTask) {
            axios.get('/tasks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedTask: response.data });
                });
        }

    }

    componentDidUpdate() {
        if (this.state.selectedTask !== null && (this.state.selectedTask !== this.state.previousTask) && this.state.previousId !== this.props.match.params.id) {
            const previousId = this.props.match.params.id;
            this.setState({ previousId: previousId });
            axios.get('/tasks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedTask: response.data });
                });
        }
    }

    deleteTaskHandler = (deleteTask) => {
        this.setState({ deleteTask: deleteTask });
    }

    editTaskHandler = (editTask) => {
        this.setState({ editTask: editTask })
    }

    backdropCancelHandler = () => {
        this.setState({ deleteTask: null, editTask: null });
    }

    render() {
        let selectedTask = <p>Projekt do wyboru</p>
        let options = null;

        if (this.state.deleteTask) {
            options = <DeleteTask deleteTask={this.state.deleteTask} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.editTask) {
            options = <EditTask editTask={this.state.editTask} backdropCancel={this.backdropCancelHandler} />
        }

        if (this.state.selectedTask) {
            selectedTask = (
                <div>
                    {options}
                    <h3 className="selectedComponentsHeadlines">Wybrane zadanie:</h3>
                    <MainTask
                        key={this.state.selectedTask.id}
                        task={this.state.selectedTask}
                        deleteTask={(deleteTask) => this.deleteTaskHandler(deleteTask)}
                        editTask={(editTask) => this.editTaskHandler(editTask)}
                    />;
                </div>
            )
        }
        return (
            selectedTask
        )
    }
}

export default SelectedTask;


// import React from 'react';

// import Task from '../Tasks/Task/Task';

// const selectedTask = (props) => {
//     let taskOutput = <p>@Zadanie nie zostało wybrane. Wyświetlić podsumowania@</p>
//     if (props.selectedTask) {
//         taskOutput = <Task
//             key={props.selectedTask.id}
//             name={props.selectedTask.name}
//             groupAmount={props.selectedTask.groupAmount}
//             participantAmount={props.selectedTask.participantAmount}
//         />;
//     }
//     return (
//         <div>
//             <div className="card-deck">{taskOutput}</div>
//             {/* <br />
//             <Projects
//                 projects={props.beneficiaryProjects}
//                 clickProject={(project) => props.clickProject(project)} /> */}
//         </div>
//     )
// }

// export default selectedTask;