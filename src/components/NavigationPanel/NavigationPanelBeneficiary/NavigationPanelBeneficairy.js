import React from 'react';

import NavigationPanelProjects from '../NavigationPanelProjects/NavigationPanelProjects';

const navigationPanelBeneficiary = (props) => (
    <div>
        <a className="text-light ml-1" href="">
            {props.name}
        </a>
        <ul className="list-group mb-5"><NavigationPanelProjects beneficiaryId={props.id} /></ul>
    </div>
)

export default navigationPanelBeneficiary;