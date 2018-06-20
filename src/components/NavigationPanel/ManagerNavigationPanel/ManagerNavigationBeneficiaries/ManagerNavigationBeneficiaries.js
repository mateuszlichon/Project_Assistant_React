import React from 'react';
import ManagerNavigationBeneficiary from './ManagerNavigationBeneficiary/ManagerNavigationBeneficiary';

const managerNavigationBeneficiaries = (props) => {
    let navigationPanelOutput = <p>Brak beneficjentów w bazie danych</p>
    if (props.beneficiaries.length > 0) {
        navigationPanelOutput = props.beneficiaries.map(beneficiary => {
            return <ManagerNavigationBeneficiary
                key={beneficiary.id}
                name={beneficiary.name}
                beneficiaryId={beneficiary.id}
                />

        });
    }

    return (
        <div>
            <ul className="list-group mb-5">{navigationPanelOutput}</ul>
        </div>
    );
}

export default managerNavigationBeneficiaries;