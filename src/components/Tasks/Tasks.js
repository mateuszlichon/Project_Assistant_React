import React from 'react';

import Task from './Task/Task';

const tasks = (props) => {
    let tasks = "";
    if (props.tasks.length > 0) {
        tasks = props.tasks.map(response => {
            return <Task
                name={response.name}
                selectedTask={() => props.selectedTask(response)}
                // voivodeship={response.voivodeship}
                key={response.id} />
        })
    }

    return (<div className="card-deck">{tasks}</div>);
}

export default tasks;