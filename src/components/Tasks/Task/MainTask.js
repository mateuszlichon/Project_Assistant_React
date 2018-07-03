import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const task = (props) => (
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">nazwa: {props.task.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <p>wymagana liczba grup: {props.task.groupAmount}</p>
            <p>wymagana liczba uczestników: {props.task.participantAmount}</p>
            <p><Button bsStyle="danger">Usuń zadanie</Button>
                <Button bsStyle="warning">Edytuj zadanie</Button></p>
        </Panel.Body>
    </Panel>
)

export default task;