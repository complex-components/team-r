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
          <h1>Team R!</h1>
        </div>
        <div className="overskrift">Dagsaktuell 3 på rad</div>
        <div className="component-test">
            <div className="brett" >
                <div className="rad">
                    <Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/>
                 </div>
                <div className="rad">
                    <Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/>
                </div>
                <div className="rad">
                    <Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/>
                </div>
                 <div className="rad">
                     <Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/><Block value="y"/>
                 </div>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
