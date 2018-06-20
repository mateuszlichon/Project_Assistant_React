import React from 'react';

// import NavigationPanelProjects from '../NavigationPanelProjects/NavigationPanelProjects';

const managerNavigationBeneficiary = (props) => (
    <div>
        <h4 className="text-light ml-2" onClick={props.clicked}>{props.name}</h4>
        {/* <ul><NavigationPanelProjects
            beneficiaryId={props.id}
            selectedTask={(task) => props.selectedTask(task)}
            // clickProject={(project) => props.clickProject(project)}
            />
            </ul> */}
    </div>
)

export default managerNavigationBeneficiary;