import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import ProjectManager from './containers/ProjectManager/ProjectManager';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Route path="/" component={ProjectManager} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
