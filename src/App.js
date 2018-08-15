import React, { Component } from 'react';
import './css/App.css';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <div className="sidebar">
              <ul>
                <li>
                  <div className="icon">
                    <a href="/">
                      <i className="fas fa-home fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <a href="/about">
                      <i className="fas fa-user fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <a href="/skills">
                      <i className="fas fa-asterisk fa-2x"></i>
                    </a>
                   </div>
                </li>
                <li>
                  <div className="icon">
                    <a href="/projects">
                      <i className="fas fa-video fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <a href="/contact">
                      <i className="fas fa-envelope fa-2x"></i>
                    </a>  
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Home />
            </div>
            <div>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
