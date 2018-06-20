import React, { Component } from 'react';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';

import NavigationPanelProject from './NavigationPanelProject/NavigationPanelProject';

class NavigationPanelProjects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/projects/beneficiary/' + this.props.beneficiaryId)
            .then(response => {
                this.setState({ projects: response.data });
            });
    }

    render() {
        let beneficiaryProjects = <li className="ml-1">nie ma projektów w bazie danych</li>
        if (this.state.projects.length > 0) {
            beneficiaryProjects = this.state.projects.map(project => {
                return (
                    // <NavLink
                    //     to={'/manager/' + project.id}
                    //     key={project.id}>
                        <NavigationPanelProject
                        key={project.id}
                            name={project.name}
                            projectId={project.id}
                            selectedTask={(task) => this.props.selectedTask(task)}
                            clickProject={() => this.props.clickProject(project)} />
                    // </NavLink>
                );
            });
        }

        return (
            <div>{beneficiaryProjects}</div>
        );
    }

}

export default NavigationPanelProjects;