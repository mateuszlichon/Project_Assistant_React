import React from 'react';

import { Panel, Button } from 'react-bootstrap';

const task = (props) => (
    <Panel eventKey={props.task.id}>
        <Panel.Heading>
            <Panel.Title toggle>nazwa: {props.task.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
            <p>wymagana liczba grup: {props.task.groupAmount}</p>
            <p>wymagana liczba uczestników: {props.task.participantAmount}</p>
            <p>@jakieś informacje o zadaniu@</p>
            <Button bsStyle="danger" onClick={() => props.deleteTask(props)}>Usuń projekt</Button>
            <Button bsStyle="warning" onClick={() => props.editTask(props)}>Edytuj projekt</Button>
        </Panel.Body>
    </Panel>
    // <div className='card text-center'>
    //     <div className="card-header" onClick={props.selectedTask}>nazwa: {props.name}</div>
    //     <div className="card-body">
    //         <p className="card-text">wymagana liczba grup: {props.groupAmount}</p>
    //         <p className="card-text">wymagana liczba uczestników: {props.participantAmount}</p>
    //         <p className="card-text">@jakieś informacje o zadaniu@</p>
    //         <a className="btn btn-danger">Usuń zadanie</a>
    //         <a className="btn btn-warning">Edytuj zadanie</a>
    //     </div>
    //     <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    // </div>

)

export default task;