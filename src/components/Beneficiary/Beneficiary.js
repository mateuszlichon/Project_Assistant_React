import React from 'react';

const beneficiary = (props) => (
    <div className='card bg-info'>
        <div className="card-header" onClick={props.clicked}>nazwa: {props.name}</div>
    </div>
)


export default beneficiary;