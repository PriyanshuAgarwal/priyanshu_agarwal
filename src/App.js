import React, { Component } from 'react';
import './css/App.css';
import CompSvg from './animate_svg'
import Home from './home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <div class="sidebar">
              <ul>
                <li><i class="fas fa-home fa-2x"></i></li>
                <li><i class="fas fa-user fa-2x"></i></li>
                <li><i class="fas fa-asterisk fa-2x"></i></li>
                <li><i class="fas fa-user fa-2x"></i></li>
                <li><i class="fas fa-asterisk fa-2x"></i></li>
              </ul>
            </div>
            <Home />
            {/* <CompSvg></CompSvg> */}
        </p>
      </div>
    );
  }
}

export default App;
