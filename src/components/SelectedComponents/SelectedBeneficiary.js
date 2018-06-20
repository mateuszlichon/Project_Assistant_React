import React, { Component } from 'react';
import axios from 'axios';

import Beneficiary from '../Beneficiary/Beneficiary';
import Projects from '../Projects/Projects';

class SelectedBeneficiary extends Component {
    state = {
        previousBeneficiary: [],
        selectedBeneficiary: null,
        previousId: null,
        beneficiaryProjects: null
    }

    componentDidMount() {
        console.log('mount');
        const previousId = this.props.match.params.id;
        this.setState({ previousId: previousId });
        if (!this.state.selectedBeneficiary) {
            axios.get('http://localhost:8080/beneficiaries/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedBeneficiary: response.data });
                });
            axios.get('http://localhost:8080/projects/beneficiary/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ beneficiaryProjects: response.data });
                });
        }
        console.log(this.state.previousId);
        console.log(previousId);
        console.log(this.props.match.params.id);

    }

    componentDidUpdate() {
        if (this.state.selectedBeneficiary !== null && (this.state.selectedBeneficiary !== this.state.previousBeneficiary) && this.state.previousId !== this.props.match.params.id) {
            const previousId = this.props.match.params.id;
            this.setState({ previousId: previousId });
            axios.get('http://localhost:8080/beneficiaries/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ selectedBeneficiary: response.data });
                });
            axios.get('http://localhost:8080/projects/beneficiary/' + this.props.match.params.id)
                .then(response => {
                    this.setState({ beneficiaryProjects: response.data });
                });
            const previousBeneficiary = this.state.selectedBeneficiary;
            this.setState({ previousBeneficiary: previousBeneficiary });
        }
    }

    render() {
        let selectedBeneficiary = <p>Projekt do wyboru</p>

        if (this.state.selectedBeneficiary && this.state.beneficiaryProjects) {
            selectedBeneficiary = (
                <div>
                    <Beneficiary
                        key={this.state.selectedBeneficiary.id}
                        name={this.state.selectedBeneficiary.name}
                    />
                    <br />
                    <Projects
                        projects={this.state.beneficiaryProjects}
                    />
                </div>
            )
        }
        return (
            selectedBeneficiary
        )
    }

}

// = (props) => {
//     let beneficiaryOutput = <p>@Beneficjent nie wybrany. Wyświetlić podsumowania@</p>
//     if (props.selectedBeneficiary) {
//         beneficiaryOutput = <Beneficiary
//             key={props.selectedBeneficiary.id}
//             name={props.selectedBeneficiary.name}
//         />;
//     }
//     return (
//         <div>
//             <div className="card-deck">{beneficiaryOutput}</div>
//             <br />
//             <Projects
//                 projects={props.beneficiaryProjects}
//                 clickProject={(project) => props.clickProject(project)} />
//         </div>
//     )
// }

export default SelectedBeneficiary;