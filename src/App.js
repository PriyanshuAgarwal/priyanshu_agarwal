import React, { Component } from 'react';
import './css/App.css';
import Home from './home';
import Profile from './profile';
import Skill from './components/skills/index.js';
import Contact from './contact';
import Project from './project';
import SidebarIcon from './sidebarIcon';
import _ from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'home',
      models: [
        {name: "home", icon: "home" },
        {name: "about", icon: "user"},
        {name: "skills", icon: "asterisk"},
        {name: "projects", icon: "video"},
        {name: "contact", icon: "envelope"}
      ]
    }

    this.renderIcons = this.renderIcons.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({activeView: newView})
  }

  renderIcons() {
    return _.map(this.state.models, (model) => {
      return (<SidebarIcon
        onChange={this.changeView}
        modelName={model.name}
        icon={model.icon}
        isActive={this.state.activeView === model.name} 
      />)
    })
  }

  render() {
    const { activeView } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <div className='sidebar-ctn'>
            <div className="sidebar">
              <div className='sidebar-items'>
                {this.renderIcons()}
              </div>
            </div>
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
            <div className={this.state.activeView === 'projects' ? '' : 'hidden'}>
              <Project />
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
