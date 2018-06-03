import React from 'react';

import NavigationPanelProjects from '../NavigationPanelProjects/NavigationPanelProjects';

const navigationPanelBeneficiary = (props) => (
    <div>
        <a href=""><h4 className="text-light ml-2">{props.name}</h4></a>
        <ul className="list-group mb-5"><NavigationPanelProjects beneficiaryId={props.id} /></ul>
    </div>
)

export default navigationPanelBeneficiary;