import React, { Component } from 'react';
import Block from './Block'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const t = require('./trump.jpg')
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Team R!</h1>
        </div>
        <div className="component-test">
            <Block image={t}/><Block image={t}/><Block image={t}/><br/>
            <Block image={t}/><Block image={t}/><Block image={t}/><br/>
            <Block image={t}/><Block image={t}/><Block image={t}/><br/>
        </div>
      </div>
    );
  }
}

export default App;
