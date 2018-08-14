import React, { Component } from 'react';
import './css/App.css';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <div class="sidebar">
              <ul>
                <li>
                  <div className="icon">
                    <i class="fas fa-home fa-2x"></i>
                  </div>
                </li>
                <div className="icon">
                  <li>
                    <i class="fas fa-user fa-2x"></i>
                  </li>
                </div>
                <div className="icon">
                  <li>
                    <i class="fas fa-asterisk fa-2x"></i>
                  </li>
                </div>
                <div className="icon">
                  <li>
                    <i class="fas fa-video fa-2x"></i>
                  </li>
                </div>
                <div className="icon">
                  <li>
                    <i class="fas fa-envelope fa-2x"></i>
                  </li>
                </div>
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
