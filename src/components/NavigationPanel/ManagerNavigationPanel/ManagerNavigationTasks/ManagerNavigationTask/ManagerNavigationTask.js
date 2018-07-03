import React from 'react';
import { NavLink } from 'react-router-dom';

const managerNavigationTask = (props) => (
    <NavLink
        to={'/manager/task/' + props.taskId}>
        <h5>{props.name}</h5>
    </NavLink>
)

export default managerNavigationTask;