import React, { Component } from 'react';
import axios from 'axios';

class NavigationPanelProject extends Component {
    state = {
        tasks : []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tasks/project/' + this.props.projectId)
            .then(response => {
                this.setState({ tasks : response.data });
                console.log(response.data);
            });
    }

    render() {
        return (
            <a className="text-light ml-4" href="">{this.props.name}<br /></a>
        )
    }
}

export default NavigationPanelProject;