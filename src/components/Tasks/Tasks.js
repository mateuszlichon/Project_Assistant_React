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
                // voivodeship={response.voivodeship}
                key={response.id} />
        })
    }

    return (<PanelGroup accordion id="tasks">{tasks}</PanelGroup>);
}

export default tasks;