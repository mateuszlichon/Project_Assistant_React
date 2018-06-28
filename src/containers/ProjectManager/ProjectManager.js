import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ManagerNavigationPanel from '../../components/NavigationPanel/ManagerNavigationPanel/ManagerNavigationPanel';
import SelectedBeneficiary from '../../components/SelectedComponents/SelectedBeneficiary';
import SelectedProject from '../../components/SelectedComponents/SelectedProject';
import SelectedTask from '../../components/SelectedComponents/SelectedTask';

class ProjectManager extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 bg-info">
                    <ManagerNavigationPanel />
                </div>
                <div className="col-sm-7 col-md-8 col-lg-9 col-xl-10">
                    <div className="container">
                        <Route path="/manager/task/:id" exact component={SelectedTask} />
                        <Route path="/manager/beneficiary/:id" exact component={SelectedBeneficiary} />
                        <Route path="/manager/project/:id" exact component={SelectedProject} />
                    </div>
                </div>
            </div>
            // <Layout navigation={managerNavigationPanel} >{pageOutput}</Layout>
        )
    }
}

export default ProjectManager;