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
            <Button bsStyle="danger" onClick={() => props.deleteTask(props.task)}>Usuń projekt</Button>
            <Button bsStyle="warning" onClick={() => props.editTask(props.task)}>Edytuj projekt</Button>
        </Panel.Body>
    </Panel>
)

export default task;