import React from 'react';
import { NavLink } from 'react-router-dom';

import ManagerNavigationProjects from '../../ManagerNavigationProjects/ManagerNavigationProjects';

const managerNavigationBeneficiary = (props) => (
    <div>
        <NavLink
            to={'/manager/beneficiary/' + props.beneficiaryId}>
            <h3>{props.name}</h3>
        </NavLink>
        <ul><ManagerNavigationProjects
            beneficiaryId={props.beneficiaryId}
            />
            </ul>
    </div>
)

export default managerNavigationBeneficiary;