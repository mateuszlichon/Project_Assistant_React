import React from 'react';

import NavigationPanelProjects from '../NavigationPanelProjects/NavigationPanelProjects';

const navigationPanelBeneficiary = (props) => (
    <div>
        <a className="text-light" href="">
            {props.name}
        </a>
        <ul>
            <NavigationPanelProjects beneficiaryId={props.id} />
        </ul>
    </div>
)

export default navigationPanelBeneficiary;