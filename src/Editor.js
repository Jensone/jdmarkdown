import React, { Component } from 'react';
import logo from './logo.svg';
import './Editor.css';
// MD insctructions
import { sampleText } from './sampleText';
// Marked.js
import marked from 'marked';

class App extends Component {

  state = {
    text: sampleText
  }

  editText = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
  }

  render() {
    return (
      <div className="App">
        <br/>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-center">Write in markdown here</h2>
                <textarea
                className="form-control"
                value={ this.state.text }
                rows="35"
                onChange={(e) => this.editText(e)}>
                </textarea>
              </div>
              <div className="col-md-6">
                <h2 className="text-center">Live preview</h2>
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
