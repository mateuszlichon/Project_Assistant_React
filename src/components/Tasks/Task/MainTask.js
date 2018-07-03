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
            <p><Button bsStyle="danger" onClick={() => props.deleteTask(props.task)}>Usuń projekt</Button>
                <Button bsStyle="warning" onClick={() => props.editTask(props.task)}>Edytuj projekt</Button></p>
        </Panel.Body>
    </Panel>
)

export default task;