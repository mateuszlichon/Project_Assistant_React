import React, { Component } from 'react';
import axios from 'axios';

class Projects extends Component {

    componentDidUpdate() {
        if (this.props.beneficiaryId) {
            axios.get('http://localhost:8080/projects/beneficiary/' + this.props.beneficiaryId)
                .then(response => {
                    console.log(response.data);
                });
        }
    }

    render() {
        return <p>projekt</p>;
    }

}

export default Projects;