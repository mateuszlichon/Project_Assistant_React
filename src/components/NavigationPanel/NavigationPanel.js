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
                clicked={() => props.clickBeneficiary(beneficiary)}
                clickProject={(project) => props.clickProject(project)}
                selectedTask={(task) => props.selectedTask(task)}
                />

        });
    }

    return (
        <div>
            <ul className="list-group mb-5">{navigationPanelOutput}</ul>
        </div>
    );
}

export default navigationPanel;