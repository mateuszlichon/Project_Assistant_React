import React from 'react';
import NavigationPanelTasks from '../../NavigationPanelTasks/NavigationPanelTasks';

const navigationPanelProject = (props) => (
    <div>
        <a href=""><h5 className="text-light ml-4" >{props.name}</h5></a>
        <ul><NavigationPanelTasks projectId={props.projectId} /></ul>
    </div>
)

export default navigationPanelProject;