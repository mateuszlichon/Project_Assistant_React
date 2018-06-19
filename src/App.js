import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import ProjectManager from './containers/ProjectManager/ProjectManager';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SelectedProject from './components/SelectedComponents/SelectedProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <ProjectManager />
          {/* <Route path="/" exact component={ProjectManager} /> */}
          <Route path="/manager/project/:id" exact component={SelectedProject} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
