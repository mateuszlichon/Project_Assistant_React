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
          <Route path="/" exact render={() => <h1>Strona powitalna @ do zrobienia</h1>} />
          <Route path="/user" exact render={() => <h1>Panel użytkownika @ do zrobienia</h1>} />
          <Route path="/manager" component={ProjectManager} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
