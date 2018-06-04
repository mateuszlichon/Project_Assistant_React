import React from 'react';
import NavigationPanelTasks from '../../NavigationPanelTasks/NavigationPanelTasks';

const navigationPanelProject = (props) => (
    <div>
        <a href=""><h6 className="text-light" >{props.name}</h6></a>
        <ul><NavigationPanelTasks projectId={props.projectId} /></ul>
    </div>
)

export default navigationPanelProject;