import React from 'react';

import Project from './Project/Project';

const projects = (props) => {
    let projects = "";
    if (props.projects.length > 0) {
        projects = props.projects.map(response => {
            return <Project
                name={response.name}
                voivodeship={response.voivodeship}
                key={response.id}
                clickProject={() => props.clickProject(response)}
                />
        })
    }

    return (<div className="card-deck">{projects}</div>);
}

export default projects;