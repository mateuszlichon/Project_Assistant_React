import React from 'react';

const beneficiary = (props) => (
    <div className='card text-center'>
        <div className="card-header">nazwa: {props.name}</div>
        <div className="card-body">
            <p className="card-text">@jakieś informacje o beneficjencie@</p>
            <a className="btn btn-danger">Usuń beneficjenta</a>
            <a className="btn btn-warning">Edytuj beneficjenta</a>
        </div>
        <div className="card-footer text-muted">@Stopka z innymi informacjami@</div>
    </div>
)


export default beneficiary;