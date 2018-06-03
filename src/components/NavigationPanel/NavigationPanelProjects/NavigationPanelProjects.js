import React, { Component } from 'react';
import axios from 'axios';

import NavigationPanelProject from './NavigationPanelProject/NavigationPanelProject';

class NavigationPanelProjects extends Component {
    state = {
        projects : []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/projects/beneficiary/' + this.props.beneficiaryId)
            .then(response => {
                this.setState({projects : response.data});
                console.log(response.data);
            });
    }

    render() {
        let beneficiaryProjects = <li>nie ma projektów w bazie danych</li>
        if (this.state.projects.length > 0) {
            beneficiaryProjects = this.state.projects.map(project => {
                return <NavigationPanelProject name={project.name} />
            })
        }

        return (
            <div>
                {beneficiaryProjects}
            </div>
        );
    }

}

export default NavigationPanelProjects;