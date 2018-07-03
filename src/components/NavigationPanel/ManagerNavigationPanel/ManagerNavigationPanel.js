import React, { Component } from 'react';
import axios from '../../../axios-base';

import ManagerNavigationBeneficiaries from './ManagerNavigationBeneficiaries/ManagerNavigationBeneficiaries';

class ManagerNavigationPanel extends Component {
    state = {
        beneficiaries: []
    }

    componentDidMount() {
        axios.get('/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
            });
    }

    render() {
        return (
            <ManagerNavigationBeneficiaries
                beneficiaries={this.state.beneficiaries}
            />
        )
    }
}

export default ManagerNavigationPanel;