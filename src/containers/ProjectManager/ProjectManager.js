import React, { Component } from 'react';
import axios from 'axios';

import Beneficiary from '../../components/Beneficiary/Beneficiary';
import Projects from '../../components/Projects/Projects';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

class ProjectManager extends Component {
    state = {
        beneficiaries: [],
        selectedBeneficiaryId: null
    }

    componentDidMount() {
        axios.get('http://localhost:8080/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
                console.log(beneficiaries);
            });
    }

    selectedBeneficiaryHandler = (id) => {
        this.setState({ selectedBeneficiaryId: id });
        console.log(id);
    }

    render() {
        let beneficiaryOutput = <p>Brak beneficjentów w bazie danych</p>
        if (this.state.beneficiaries.length > 0) {
            beneficiaryOutput = this.state.beneficiaries.map(beneficiary => {
                return <Beneficiary
                    key={beneficiary.id}
                    name={beneficiary.name}
                    clicked={() => this.selectedBeneficiaryHandler(beneficiary.id)} />
            });
        }
        return (
            <div className="row">
                <div className="col-sm-2 bg-info">
                    <NavigationPanel />
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