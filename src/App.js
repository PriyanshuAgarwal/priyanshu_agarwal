import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompSvg from './animate_svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <div>
            <div class="sidebar">
              <ul>
                <li><i class="fas fa-home"></i></li>
                <i class="fas fa-user"></i>
                <i class="fas fa-asterisk"></i>
              </ul>
            </div>
          </div>
            {/* <CompSvg></CompSvg> */}
        </p>
      </div>
    );
  }
}

export default App;
