import React from 'react';
import NavigationPanelBeneficiary from './NavigationPanelBeneficiary/NavigationPanelBeneficairy';

const navigationPanel = (props) => {
    let navigationPanelOutput = <p>Brak beneficjentów w bazie danych</p>
    if (props.beneficiaries.length > 0) {
        navigationPanelOutput = props.beneficiaries.map(beneficiary => {
            return <NavigationPanelBeneficiary
                key={beneficiary.id}
                name={beneficiary.name}
                id={beneficiary.id}
                clicked={() => this.selectedBeneficiaryHandler(beneficiary.id)} />

        });
    }

    return (
        <div>
            <ul className="list-group mb-5">{navigationPanelOutput}</ul>
            <p>Beneficjent</p>
            <p>Projekt</p>
            <p>Zadanie</p>
        </div>
    );
}

export default navigationPanel;