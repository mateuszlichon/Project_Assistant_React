import React from 'react';
import { Panel } from 'react-bootstrap';

const project = (props) => (
    <Panel eventKey={props.project.id}>
        <Panel.Heading>
            <Panel.Title toggle>{props.project.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
            województwo: {props.project.voivodeship}<br/>
            <a className="btn btn-danger" onClick={() => props.deleteProject(props.project)}>Usuń projekt</a>
            <a className="btn btn-warning" onClick={() => props.editProject(props.project)}>Edytuj projekt</a>
    </Panel.Body>
        {/* <div className="card-header" onClick={props.clickProject}>nazwa: {props.project.name}</div>
        <div className="card-body">
            <p className="card-text">województwo: {props.project.voivodeship}</p>
            <p className="card-text">@jakieś informacje o projekcie@</p>
            <a className="btn btn-danger" onClick={() => props.deleteProject(props.project)}>Usuń projekt</a>
            <a className="btn btn-warning" onClick={() => props.editProject(props.project)}>Edytuj projekt</a>
        </div>
        <div className="card-footer text-muted">@Stopka z innymi informacjami@</div> */}
    </Panel>
)

export default project;