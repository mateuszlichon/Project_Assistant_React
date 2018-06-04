import React from 'react';
import NavigationPanelTasks from '../../NavigationPanelTasks/NavigationPanelTasks';

const navigationPanelProject = (props) => (
    <div>
        <a><h6 className="text-light" onClick={props.clickProject} >{props.name}</h6></a>
        <ul><NavigationPanelTasks
            projectId={props.projectId} /></ul>
    </div>
)

export default navigationPanelProject;