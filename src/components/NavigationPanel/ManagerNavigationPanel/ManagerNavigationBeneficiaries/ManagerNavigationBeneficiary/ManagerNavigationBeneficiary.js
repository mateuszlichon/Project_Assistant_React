import React from 'react';
import { NavLink } from 'react-router-dom';

import ManagerNavigationProjects from '../../ManagerNavigationProjects/ManagerNavigationProjects';

const managerNavigationBeneficiary = (props) => (
    <div>
        <NavLink
            to={'/manager/beneficiary/' + props.beneficiaryId}>
            <h4>{props.name}</h4>
        </NavLink>
        <ul><ManagerNavigationProjects
            beneficiaryId={props.beneficiaryId}
            // selectedTask={(task) => props.selectedTask(task)}
            // clickProject={(project) => props.clickProject(project)}
            />
            </ul>
    </div>
)

export default managerNavigationBeneficiary;