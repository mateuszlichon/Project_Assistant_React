import React, { Component } from 'react';
import './App.css';

import ProjectManager from './containers/ProjectManager/ProjectManager';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>navigation bar</p>
        <ProjectManager />
      </div>
    );
  }
}

export default App;
