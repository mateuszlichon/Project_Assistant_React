import React, { Component } from 'react';
import axios from '../../../axios-base';

import ManagerNavigationBeneficiaries from './ManagerNavigationBeneficiaries/ManagerNavigationBeneficiaries';
import { Button } from 'react-bootstrap';
import AddBeneficiary from '../../AddFunction/AddBeneficiary/AddBeneficiary';

class ManagerNavigationPanel extends Component {
    state = {
        beneficiaries: [],
        addBeneficiary: false
    }

    componentDidMount() {
        axios.get('/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
            });
    }

    addProjectHandler = () => {
        this.setState({ addBeneficiary: true });
    }

    backdropCancelHandler = () => {
        this.setState({ addBeneficiary: false });
    }

    render() {
        let options = null;
        if (this.state.addBeneficiary) {
            options = <AddBeneficiary backdropCancel={this.backdropCancelHandler} />
        }

        return (
            <div>
                {options}
                <ManagerNavigationBeneficiaries
                    beneficiaries={this.state.beneficiaries}
                />
                <Button block bsStyle="success" onClick={() => this.addProjectHandler()}>Dodaj beneficjenta</Button>
            </div>
        )
    }
}

export default ManagerNavigationPanel;