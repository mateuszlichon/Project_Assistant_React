import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import Task from './Task/Task';

const tasks = (props) => {
    let tasks = "";
    if (props.tasks.length > 0) {
        tasks = props.tasks.map(response => {
            return <Task
                task={response}
                selectedTask={() => props.selectedTask(response)}
                key={response.id}
                deleteTask={(deleteTask) => props.deleteTask(deleteTask)}
                editTask={(editTask) => props.editTask(editTask)}
                />
        })
    }

    return (<PanelGroup accordion id="tasks">{tasks}</PanelGroup>);
}

export default tasks;