import React, { Component } from 'react';
import './Editor.css';
// MD insctructions
import { mdExample } from './mdExample';
// Marked.js
import marked from 'marked';

class App extends Component {

  state = {
    mdExample: mdExample
  };

  componentWillMount() {
    const localStorageEditor = localStorage.getItem('mdExample');
    if (localStorageEditor) {
      this.setState({ mdExample: localStorageEditor });
    }
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('mdExample', nextState.mdExample);
  };

  editText = (event) => {
    const mdExample = event.target.value;
    this.setState({ mdExample });
  };

  mdRender = (text) => {
    const mdRender = marked(text, {sanitaze: true});
    return { __html: mdRender }
  };

  render() {
    return (
      <div className="App">

        <div className="col-xs-12 text-center text-white d-block d-sm-none">
          <h3>Best experience on dekstop or tablet</h3>
        </div>

        <div className="card d-none d-sm-block">
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

        <div className="card">
          <footer className="row">
            <div className="col-sm-12 col-md-4 text-center">
              <a href="https://www.infomaniak.com/goto/fr/my-easy-site?utm_term=5ae406817ba98"><img src="https://storage-master.infomaniak.ch/promotional/banners/medium_rectanglewordpress_fr.jpg" className="infomaniak"/></a>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <h4>Made by <a href="http://jensone.com" target="_blank">JENSONE</a></h4>
              <a href="http://jensone.com" target="_blank"><img src="http://jensone.com/wp-content/uploads/2017/11/Logo-J.svg" alt="Logo Jensone" width="180"/></a>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <h5>Cooked with</h5>
              <p className="text-center"><img src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="logo ReactJS" width="180"/></p>
              <h5>Analytics by</h5>
              <p className="text-center"><img src="https://heapanalytics.com/img/styleguide/Heap%20Logo@2x.png" alt="Logo heap analytics" width="180"/></p>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}

export default App;