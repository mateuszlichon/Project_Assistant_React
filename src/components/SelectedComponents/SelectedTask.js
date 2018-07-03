import React, { Component } from 'react';
import axios from '../../axios-base';

import MainTask from '../Tasks/Task/MainTask';

class SelectedTask extends Component {
    state = {
        previousTask: [],
        previousId: null,
        selectedTask: null
    }

    componentDidMount() {
        console.log('mount');
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedTask) {
            axios.get('/tasks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedTask: response.data });
                });
        }
        console.log(this.state.previousId);
        console.log(previousId);
        console.log(this.props.match.params.id);

    }

    componentDidUpdate() {
        console.log('update start');
        if (this.state.selectedTask !== null && (this.state.selectedTask !== this.state.previousTask) && this.state.previousId !== this.props.match.params.id) {
            const previousId = this.props.match.params.id;
            this.setState({ previousId: previousId });
            axios.get('/tasks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedTask: response.data });
                });
            const previousTask = this.state.selectedTask;
            this.setState({ previousTask: previousTask });
        }
    }

    render() {
        let selectedTask = <p>Projekt do wyboru</p>

        if (this.state.selectedTask) {
            selectedTask = (
                <div>
                    <MainTask
                        key={this.state.selectedTask.id}
                        task={this.state.selectedTask}
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