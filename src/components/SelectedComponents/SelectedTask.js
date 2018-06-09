import React from 'react';

import Task from '../Tasks/Task/Task';

const selectedTask = (props) => {
    let taskOutput = <p>@Zadanie nie zostało wybrane. Wyświetlić podsumowania@</p>
    if (props.selectedTask) {
        taskOutput = <Task
            key={props.selectedTask.id}
            name={props.selectedTask.name}
            groupAmount={props.selectedTask.groupAmount}
            participantAmount={props.selectedTask.participantAmount}
        />;
    }
    return (
        <div>
            <div className="card-deck">{taskOutput}</div>
            {/* <br />
            <Projects
                projects={props.beneficiaryProjects}
                clickProject={(project) => props.clickProject(project)} /> */}
        </div>
    )
}

export default selectedTask;