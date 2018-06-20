import React, { Component } from 'react';
import axios from 'axios';

import NavigationPanel from '../../NavigationPanel/NavigationPanel';
import SelectedBeneficiary from '../../SelectedComponents/SelectedBeneficiary';
import SelectedProject from '../../SelectedComponents/SelectedProject';
import SelectedTask from '../../SelectedComponents/SelectedTask';

class ManagerNavigationPanel extends Component {
    state = {
        beneficiaries: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({ beneficiaries: beneficiaries });
            });
    }

    render() {
        return (
            <NavigationPanel
                beneficiaries={this.state.beneficiaries}
            />
        )
    }
}

export default ManagerNavigationPanel;