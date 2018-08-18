import React, { Component } from 'react';
import './css/App.css';
import Home from './home';
import Profile from './profile';
import Skill from './components/skills/index.js';
import Contact from './contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'home'
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({activeView: newView})
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <div className="sidebar">
              <ul>
                <li onClick={() => this.changeView('home')}>
                  <div className="icon">
                    <a>
                      <i className="fas fa-home fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li onClick={() => this.changeView('about')}>
                  <div className="icon">
                    <a>
                      <i className="fas fa-user fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li onClick={() => this.changeView('skills')}>
                  <div className="icon">
                    <a>
                      <i className="fas fa-asterisk fa-2x"></i>
                    </a>
                   </div>
                </li>
                <li onClick={() => this.changeView('projects')}>
                  <div className="icon">
                    <a>
                      <i className="fas fa-video fa-2x"></i>
                    </a>
                  </div>
                </li>
                <li onClick={() => this.changeView('contact')}>
                  <div className="icon">
                    <a>
                      <i className="fas fa-envelope fa-2x"></i>
                    </a>  
                  </div>
                </li>
              </ul>
            </div>
            <div className={this.state.activeView === 'home' ? '' : 'hidden'}>
              <Home />
            </div>
            <div className={this.state.activeView === 'about' ? '' : 'hidden'}>
              <Profile />
            </div>
            <div className={this.state.activeView === 'skills' ? '' : 'hidden'}>
              <Skill />
            </div>
            <div className={this.state.activeView === 'contact' ? '' : 'hidden'}>
              <Contact />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
