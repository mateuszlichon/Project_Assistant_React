import React, { Component } from 'react';
// import axios from 'axios';

// import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';
// import SelectedBeneficiary from '../../components/SelectedComponents/SelectedBeneficiary';
// import SelectedProject from '../../components/SelectedComponents/SelectedProject';
// import SelectedTask from '../../components/SelectedComponents/SelectedTask';
import Layout from '../../components/Layout/Layout';
import ManagerNavigationPanel from '../../components/NavigationPanel/ManagerNavigationPanel/ManagerNavigationPanel';

class ProjectManager extends Component {
    render() {
        let managerNavigationPanel = <ManagerNavigationPanel />
        let pageOutput = <h3>@Ekran powitalny i wiadomości porównawcze@</h3>

        return (
            <Layout navigation={managerNavigationPanel} >{pageOutput}</Layout>
        )
    }
}

export default ProjectManager;