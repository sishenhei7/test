import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jsonp from 'jsonp';
import nock from 'nock';

class App extends Component {
  testJsonp = () => {
    const host = '//dora.webcgi.163.com';
    const url = '/api/213_792_2018_09_14/active_check';
    const opts = {
        account: '316547491'
    };
    function callback(err, data) {
        console.log(data);
    }

    jsonp(host + url, opts, callback);
  }
  render() {
    this.testJsonp();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
