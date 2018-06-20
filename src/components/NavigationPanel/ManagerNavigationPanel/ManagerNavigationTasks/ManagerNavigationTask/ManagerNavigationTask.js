import React from 'react';
import { NavLink } from 'react-router-dom';

const managerNavigationTask = (props) => (
    <NavLink
        to={'/manager/task/' + props.taskId}>
        <h6>{props.name}</h6>
    </NavLink>
)

export default managerNavigationTask;