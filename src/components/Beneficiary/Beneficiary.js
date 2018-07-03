import React from 'react';

import {Panel, Button} from 'react-bootstrap';

const beneficiary = (props) => (
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">nazwa: {props.beneficiary.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <p>@jakieś informacje o beneficjencie@</p>
            <p><Button bsStyle="danger" onClick={() => props.deleteBeneficiary(props.beneficiary)}>Usuń Beneficjenta</Button>
                <Button bsStyle="warning" onClick={() => props.editBeneficiary(props.beneficiary)}>Edytuj Beneficjenta</Button></p>
        </Panel.Body>
    </Panel>
    // <div className='card text-center'>
    //     <div className="card-header">nazwa: {props.name}</div>
    //     <div className="card-body">
    //         <p className="card-text">@jakieś informacje o beneficjencie@</p>
    //         <a className="btn btn-danger">Usuń beneficjenta</a>
    //         <a className="btn btn-warning">Edytuj beneficjenta</a>
    //     </div>
    //     <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    // </div>
)


export default beneficiary;