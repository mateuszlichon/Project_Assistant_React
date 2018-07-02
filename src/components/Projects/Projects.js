import React from 'react';

import Project from './Project/Project';

const projects = (props) => {
    let projects = "";
    if (props.projects.length > 0) {
        projects = props.projects.map(response => {
            return <Project
                project={response}
                key={response.id}
                clickProject={() => props.clickProject(response)}
                deleteProject={(deleteProject) => props.deleteProject(deleteProject)}
                editProject={(editProject) => props.editProject(editProject)}
                />
        })
    }

    return (<div className="card-deck">{projects}</div>);
}

export default projects;