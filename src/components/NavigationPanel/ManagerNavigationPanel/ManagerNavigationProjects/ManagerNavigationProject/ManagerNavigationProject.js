import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationPanelTasks from '../../ManagerNavigationTasks/ManagerNavigationTasks';

const managerNavigationProject = (props) => (
    <div>
        <NavLink
            to={'/manager/project/' + props.projectId}>
            <h6>{props.name}</h6>
        </NavLink>
        <ul>
            {/* <NavigationPanelTasks
                projectId={props.projectId}
                selectedTask={(task) => props.selectedTask(task)} /> */}
        </ul>
    </div>
)

export default managerNavigationProject;