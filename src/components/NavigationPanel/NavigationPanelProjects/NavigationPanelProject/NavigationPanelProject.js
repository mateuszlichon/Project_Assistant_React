import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationPanelTasks from '../../NavigationPanelTasks/NavigationPanelTasks';

const navigationPanelProject = (props) => (
    <div>
        <NavLink
            to={'/manager/' + props.projectId}>
            <h6>{props.name}</h6>
        </NavLink>
        <ul>
            <NavigationPanelTasks
                projectId={props.projectId}
                selectedTask={(task) => props.selectedTask(task)} />
        </ul>
    </div>
)

export default navigationPanelProject;