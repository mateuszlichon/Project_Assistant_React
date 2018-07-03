import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const task = (props) => (
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">nazwa: {props.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <p>wymagana liczba grup: {props.groupAmount}</p>
            <p>wymagana liczba uczestników: {props.participantAmount}</p>
            <p><Button bsStyle="danger">Usuń zadanie</Button>
                <Button bsStyle="warning">Edytuj zadanie</Button></p>
        </Panel.Body>
    </Panel>
    // <div className='card text-center'>
    //     <div className="card-header" onClick={props.selectedTask}>nazwa: {props.name}</div>
    //     <div className="card-body">        
    //     <p className="card-text">wymagana liczba grup: {props.groupAmount}</p>
    //     <p className="card-text">wymagana liczba uczestników: {props.participantAmount}</p>
    //         <p className="card-text">@jakieś informacje o zadaniu@</p>
    //         <a className="btn btn-danger">Usuń zadanie</a>
    //         <a className="btn btn-warning">Edytuj zadanie</a>
    //     </div>
    //     <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    // </div>
)

export default task;