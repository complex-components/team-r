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
        <div className="overskrift">Dagsaktuell 3 på rad</div>
        <div className="component-test">

            <div className="brett">
                <div className="rad">
                        <Block image={t}/><Block image={t}/><Block image={t}/><br/>
                </div>
                <div className="rad">
                    <Block image={t}/><Block image={t}/><Block image={t}/><br/>
                </div>
                <div className="rad">
                    <Block image={t}/><Block image={t}/><Block image={t}/><br/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
