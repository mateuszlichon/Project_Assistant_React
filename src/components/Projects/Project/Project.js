import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import Moment from 'react-moment';

const project = (props) => (
    <Panel eventKey={props.project.id}>
        <Panel.Heading>
            <Panel.Title toggle>{props.project.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
            <p>województwo: {props.project.voivodeship}</p>
            <p>data rozpoczęcia: <Moment format="DD-MM-YYYY">{props.project.startDate}</Moment></p>
            <p>data zakończenia: <Moment format="DD-MM-YYYY">{props.project.endDate}</Moment></p>
            <Button bsStyle="danger" onClick={() => props.deleteProject(props.project)}>Usuń projekt</Button>
            <Button bsStyle="warning" onClick={() => props.editProject(props.project)}>Edytuj projekt</Button>
        </Panel.Body>
    </Panel>
)

export default project;