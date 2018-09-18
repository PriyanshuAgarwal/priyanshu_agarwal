import React, { Component } from 'react';
import './css/App.css';
import PropTypes from 'prop-types';

class SidebarIcon extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { icon, modelName, isActive } = this.props;
    return (
        <li onClick={() => this.props.onChange(modelName)}>
            <div className={`icon ${isActive ? 'selected-icon' : ''}`}>
            <a>
                <i className={`fas fa-${icon} fa-2x`}></i>
            </a>
            </div>
        </li>
    );
  }
}

SidebarIcon.propTypes = {
    onChange: PropTypes.func,
    icon: PropTypes.string,
    modelName: PropTypes.string,
    isActive: PropTypes.bool
}

export default SidebarIcon;
