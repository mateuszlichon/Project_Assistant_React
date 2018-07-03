import React from 'react';
import { NavLink } from 'react-router-dom';

import ManagerNavigationTasks from '../../ManagerNavigationTasks/ManagerNavigationTasks';

const managerNavigationProject = (props) => (
    <div>
        <NavLink
            to={'/manager/project/' + props.projectId}>
            <h4>{props.name}</h4>
        </NavLink>
        <ul>
            <ManagerNavigationTasks
                projectId={props.projectId} />
        </ul>
    </div>
)

export default managerNavigationProject;