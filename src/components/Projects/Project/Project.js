import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const project = (props) => (
    <Panel eventKey={props.project.id}>
        <Panel.Heading>
            <Panel.Title toggle>{props.project.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
            województwo: {props.project.voivodeship}<br />
            <Button bsStyle="danger" onClick={() => props.deleteProject(props.project)}>Usuń projekt</Button>
            <Button bsStyle="warning" onClick={() => props.editProject(props.project)}>Edytuj projekt</Button>
        </Panel.Body>
    </Panel>
)

export default project;