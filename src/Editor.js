import React, { Component } from 'react';
import logo from './logo.svg';
import './Editor.css';
// MD insctructions
import { mdExample } from './mdExample';
// Marked.js
import marked from 'marked';

class App extends Component {

  state = {
    mdExample: mdExample
  }

  editText = (event) => {
    const mdExample = event.target.value;
    this.setState({ mdExample });
  }

  mdRender = (text) => {
    const mdRender = marked(text, {sanitaze: true});
    return { __html: mdRender }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('mdExample', nextState.mdExample)
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
                value={ this.state.mdExample }
                rows="35"
                onChange={(e) => this.editText(e)}>
                </textarea>
              </div>
              <div className="col-md-6">
                <h2 className="text-center">Live preview</h2>
                <div dangerouslySetInnerHTML = { this.mdRender(this.state.mdExample) } />
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
