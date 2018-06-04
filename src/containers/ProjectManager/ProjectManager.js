import React, { Component } from 'react';
import axios from 'axios';

import Beneficiary from '../../components/Beneficiary/Beneficiary';
import Projects from '../../components/Projects/Projects';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

class ProjectManager extends Component {
    state = {
        beneficiaries: [],
        previousBeneficiary: [],
        selectedBeneficiary: null,
        beneficiaryProjects: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
            });
    }

    componentDidUpdate() {
        if (this.state.selectedBeneficiary !== null && (this.state.selectedBeneficiary !== this.state.previousBeneficiary)) {
                axios.get('http://localhost:8080/projects/beneficiary/' + this.state.selectedBeneficiary.id)
                    .then(response => {
                        this.setState({ beneficiaryProjects: response.data });
                        console.log(response.data);
                    });
            const previousBeneficiary = this.state.selectedBeneficiary;
            this.setState({
                previousBeneficiary: previousBeneficiary
            });
        }
    }

    selectedBeneficiaryHandler = (beneficiary) => {
        const previousBeneficiary = this.state.selectedBeneficiary;
        this.setState({
            previousBeneficiary: previousBeneficiary,
            selectedBeneficiary: beneficiary
        });
    }

    render() {
        let beneficiaryOutput = <p>Brak beneficjentów w bazie danych</p>
        if (this.state.selectedBeneficiary) {
            beneficiaryOutput = <Beneficiary
                key={this.state.selectedBeneficiary.id}
                name={this.state.selectedBeneficiary.name}
            />;
        }
        return (
            <div className="row">
                <div className="col-sm-2 bg-info">
                    <br />
                    <NavigationPanel clickBeneficiary={(beneficiary) => this.selectedBeneficiaryHandler(beneficiary)} beneficiaries={this.state.beneficiaries} />
                </div>
                <div className="col-sm-10">
                    <div className="card-deck">{beneficiaryOutput}</div>
                    <Projects beneficiaryId={this.state.selectedBeneficiaryId} />
                    <p>Projekty</p>
                    <p>Zadania</p>
                </div>
            </div>

        )
    }
}

export default ProjectManager;