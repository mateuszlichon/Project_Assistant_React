import React from 'react';

import Project from '../Projects/Project/Project';
import Tasks from '../Tasks/Tasks';

const selectedProject = (props) => (
    <div className="col-sm-9">
        <div className="card-deck"><Project
            name={props.selectedProject.name}
            voivodeship={props.selectedProject.voivodeship} /></div>
        <br />
        <Tasks tasks={props.projectTasks} />
    </div>
)

export default selectedProject;