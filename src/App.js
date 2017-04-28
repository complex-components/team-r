import React, { Component } from 'react';
import Block from './Block'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Team R!</h2>
        </div>
        <div className="component-test">
            <Block value="y"/><Block value="y"/><Block value="y"/><br/>
            <Block value="y"/><Block value="y"/><Block value="y"/><br/>
            <Block value="y"/><Block value="y"/><Block value="y"/><br/>
        </div>
      </div>
    );
  }
}

export default App;
