import React, { Component } from 'react';
import logo from './logo.svg';
import './Editor.css';
import { sampleText } from './sampleText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <textarea className="form-control" value={ sampleText } rows="35"></textarea>
              </div>
              <div className="col-md-6">
                <h2>Live preview</h2>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default App;
