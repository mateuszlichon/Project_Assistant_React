import React from 'react';
import NavigationPanelBeneficiary from './NavigationPanelBeneficiary/NavigationPanelBeneficairy';

const navigationPanel = (props) => {
    let navigationPanelOutput = <p>Brak beneficjentów w bazie danych</p>
    if (props.beneficiaries.length > 0) {
        navigationPanelOutput = props.beneficiaries.map(beneficiary => {
            return <ul className="list-group mb-5" key={beneficiary.id}>
            <NavigationPanelBeneficiary
                name={beneficiary.name}
                id={beneficiary.id}
                clicked={() => this.selectedBeneficiaryHandler(beneficiary.id)} />
                </ul>
        });
    }

    return (
        <div>
            {navigationPanelOutput}
            <p>Beneficjent</p>
            <p>Projekt</p>
            <p>Zadanie</p>
        </div>
    );
}

export default navigationPanel;