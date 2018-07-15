import React, { Component } from 'react';

import ManagerNavigationProject from './ManagerNavigationProject/ManagerNavigationProject';

class ManagerNavigationProjects extends Component {
    render() {
        let beneficiaryProjects = <li className="ml-1">nie ma projektów w bazie danych</li>
        if (this.props.projects.length > 0) {
            beneficiaryProjects = this.props.projects.map(project => {
                return (
                    <ManagerNavigationProject
                        key={project.id}
                        name={project.name}
                        projectId={project.id}
                        tasks={project.task}
                    />
                );
            });
        }

        return (
            <div>{beneficiaryProjects}</div>
        );
    }

}

export default ManagerNavigationProjects;