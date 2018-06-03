import React, { Component } from 'react';
// import './App.css';

import ProjectManager from './containers/ProjectManager/ProjectManager';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <ProjectManager />
      </div>
    );
  }
}

export default App;
