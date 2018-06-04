import React from 'react';

const project = (props) => (
    <div className='card text-center'>
        <div className="card-header" onClick={props.clickProject}>nazwa: {props.name}</div>
        <div className="card-body">        
        <p className="card-text">województwo: {props.voivodeship}</p>
            <p className="card-text">@jakieś informacje o projekcie@</p>
            <a className="btn btn-danger">Usuń projekt</a>
            <a className="btn btn-warning">Edytuj projekt</a>
        </div>
        <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    </div>
)

export default project;