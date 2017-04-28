import React, { Component } from 'react';
import Manager from './Manager'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const t = require('./images/trump.jpg');
    const k = require('./images/kimjong.jpg');
    const n = require('./images/nuke.jpg');

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Team R!</h1>
        </div>
        <Manager trump={t} kim={k} nuke={n}/>
      </div>
    );
  }
}

export default App;
