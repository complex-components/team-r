import React, { Component } from 'react';
import Manager from './Manager'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Team R!</h1>
        </div>
        <Manager/>
      </div>
    );
  }
}

export default App;
