import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import ProjectManager from './containers/ProjectManager/ProjectManager';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SelectedBeneficiary from './components/SelectedComponents/SelectedBeneficiary';
import SelectedProject from './components/SelectedComponents/SelectedProject';
import SelectedTask from './components/SelectedComponents/SelectedTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          {/* <ProjectManager /> */}
          {/* <Route path="/" exact component={ProjectManager} /> */}
          {/* <Switch> */}
          <Route path="/manager/task/:id" exact component={SelectedTask} />
          <Route path="/manager/beneficiary/:id" exact component={SelectedBeneficiary} />
          <Route path="/manager/project/:id" exact component={SelectedProject} />
          <Route path="/" exact component={ProjectManager} />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
