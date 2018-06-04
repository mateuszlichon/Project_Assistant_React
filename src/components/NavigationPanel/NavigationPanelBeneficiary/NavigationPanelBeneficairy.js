import React from 'react';

import NavigationPanelProjects from '../NavigationPanelProjects/NavigationPanelProjects';

const navigationPanelBeneficiary = (props) => (
    <div>
        <a><h4 className="text-light ml-2" onClick={props.clicked}>{props.name}</h4></a>
        <ul><NavigationPanelProjects
            beneficiaryId={props.id}
            clickProject={(project) => props.clickProject(project)}/></ul>
    </div>
)

export default navigationPanelBeneficiary;