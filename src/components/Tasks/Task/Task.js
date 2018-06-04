import React from 'react';

const task = (props) => (
    <div className='card text-center'>
        <div className="card-header" onClick={props.selectedTask}>nazwa: {props.name}</div>
        <div className="card-body">        
        {/* <p className="card-text">województwo: {props.voivodeship}</p> */}
            <p className="card-text">@jakieś informacje o zadaniu@</p>
            <a className="btn btn-danger">Usuń zadanie</a>
            <a className="btn btn-warning">Edytuj zadanie</a>
        </div>
        <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    </div>
)

export default task;