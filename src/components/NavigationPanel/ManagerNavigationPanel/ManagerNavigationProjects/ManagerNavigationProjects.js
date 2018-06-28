import React, { Component } from 'react';
import axios from '../../../../axios-base';
// import { NavLink } from 'react-router-dom';

import ManagerNavigationProject from './ManagerNavigationProject/ManagerNavigationProject';

class ManagerNavigationProjects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('/projects/beneficiary/' + this.props.beneficiaryId)
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
                        <ManagerNavigationProject
                        key={project.id}
                            name={project.name}
                            projectId={project.id}
                            // selectedTask={(task) => this.props.selectedTask(task)}
                            // clickProject={() => this.props.clickProject(project)}
                            />
                    // </NavLink>
                );
            });
        }

        return (
            <div>{beneficiaryProjects}</div>
        );
    }

}

export default ManagerNavigationProjects;