import React, { Component } from 'react';
import axios from '../../../../axios-base';

import ManagerNavigationTask from './ManagerNavigationTask/ManagerNavigationTask';

class ManagerNavigationTasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('/tasks/project/' + this.props.projectId)
            .then(response => {
                this.setState({ tasks: response.data });
            });
    }

    render() {
        let projectTasks = <li className="ml-1">nie ma zadań w bazie danych</li>
        if (this.state.tasks.length > 0) {
            projectTasks = this.state.tasks.map(task => {
                return <ManagerNavigationTask
                    key={task.id}
                    name={task.name}
                    // selectedTask={() => this.props.selectedTask(task)}
                    taskId={task.id} />
            })
        }

        return (
            <div>
                {projectTasks}
            </div>
        )
    }
}

export default ManagerNavigationTasks;