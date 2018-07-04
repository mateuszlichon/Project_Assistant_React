import React from 'react';

import { Panel, Button } from 'react-bootstrap';

const beneficiary = (props) => (
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">nazwa: {props.beneficiary.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <p>@informacje o beneficjencie (do uzupełnienia)@</p>
            <p><Button bsStyle="danger" onClick={() => props.deleteBeneficiary(props.beneficiary)}>Usuń Beneficjenta</Button>
                <Button bsStyle="warning" onClick={() => props.editBeneficiary(props.beneficiary)}>Edytuj Beneficjenta</Button>
                <Button bsStyle="success" onClick={() => props.addProject(props.beneficiary)}>Dodaj projekt</Button></p>
        </Panel.Body>
    </Panel>
)


export default beneficiary;