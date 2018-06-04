import React from 'react';

import Beneficiary from '../Beneficiary/Beneficiary';
import Projects from '../Projects/Projects';

const selectedBeneficiary = (props) => {
    let beneficiaryOutput = <p>@Beneficjent nie wybrany. Wyświetlić podsumowania@</p>
    if (props.selectedBeneficiary) {
        beneficiaryOutput = <Beneficiary
            key={props.selectedBeneficiary.id}
            name={props.selectedBeneficiary.name}
        />;
    }
    return (
        <div className="col-sm-9">
            <div className="card-deck">{beneficiaryOutput}</div>
            <br />
            <Projects
                projects={props.beneficiaryProjects}
                clickProject={(project) => props.clickProject(project)} />
        </div>
    )
}

export default selectedBeneficiary;