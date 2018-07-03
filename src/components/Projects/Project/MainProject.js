import React from 'react';
import { Panel } from 'react-bootstrap';

const project = (props) => (
    // <div>
    //     <div className="card-header" onClick={props.clickProject}>nazwa: {props.project.name}</div>
    //     <div className="card-body">
    //         <p className="card-text">województwo: {props.project.voivodeship}</p>
    //         <p className="card-text">@jakieś informacje o projekcie@</p>
    //         <a className="btn btn-danger" onClick={() => props.deleteProject(props.project)}>Usuń projekt</a>
    //         <a className="btn btn-warning" onClick={() => props.editProject(props.project)}>Edytuj projekt</a>
    //     </div>
    //     <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    // </div>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">nazwa: {props.project.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>województwo: {props.project.voivodeship}</Panel.Body>
    </Panel>
)

export default project;