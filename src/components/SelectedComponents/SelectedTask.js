import React from 'react';

import Task from '../Tasks/Task/Task';

const selectedTask = (props) => {
    let taskOutput = <p>@Zadanie nie zostało wybrane. Wyświetlić podsumowania@</p>
    if (props.selectedTask) {
        taskOutput = <Task
            key={props.selectedTask.id}
            name={props.selectedTask.name}
        />;
    }
    return (
        <div className="col-sm-9">
            <div className="card-deck">{taskOutput}</div>
            {/* <br />
            <Projects
                projects={props.beneficiaryProjects}
                clickProject={(project) => props.clickProject(project)} /> */}
        </div>
    )
}

export default selectedTask;