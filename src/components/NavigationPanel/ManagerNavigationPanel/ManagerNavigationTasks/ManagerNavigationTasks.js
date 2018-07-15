import React, { Component } from 'react';
import axios from '../../../../axios-base';

import ManagerNavigationTask from './ManagerNavigationTask/ManagerNavigationTask';

class ManagerNavigationTasks extends Component {

    render() {
        let projectTasks = <li className="ml-1">nie ma zadań w bazie danych</li>
        if (this.props.tasks.length > 0) {
            projectTasks = this.props.tasks.map(task => {
                return <ManagerNavigationTask
                    key={task.id}
                    name={task.name}
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