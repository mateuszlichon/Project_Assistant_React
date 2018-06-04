import React, { Component } from 'react';
import axios from 'axios';

import NavigationPanelTask from './NavigationPanelTask/NavigationPanelTask';

class NavigationPanelTasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tasks/project/' + this.props.projectId)
            .then(response => {
                this.setState({ tasks: response.data });
            });
    }

    render() {
        let projectTasks = <li className="ml-1">nie ma zadań w bazie danych</li>
        if (this.state.tasks.length > 0) {
            projectTasks = this.state.tasks.map(task => {
                return <NavigationPanelTask
                    key={task.id}
                    name={task.name}
                    tasktId={task.id} />
            })
        }

        return (
            <div>
                {projectTasks}
            </div>
        )
    }
}

export default NavigationPanelTasks;