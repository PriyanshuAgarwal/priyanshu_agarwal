import React, { Component } from 'react';
import './css/App.css';
import PropTypes from 'prop-types';

class SidebarIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isIconHide: false
    }
    this.showIcon = this.showIcon.bind(this);
    this.hideIcon = this.hideIcon.bind(this);
  }

  showIcon() {
    this.setState({isIconHide: false})
  }

  hideIcon() {
    this.setState({isIconHide: true})
  }

  render() {
    const { icon, modelName, isActive } = this.props;
    return (
        <div 
        onClick={() => this.props.onChange(modelName)}
        onMouseEnter={this.hideIcon}
        onMouseLeave={this.showIcon}
        >
            {
                this.state.isIconHide ?  (
                    <div className='icon'>
                        <p>{modelName.toUpperCase()}</p>
                    </div>
                ): (
                    <div className={`icon ${isActive ? 'selected-icon' : ''}`}>
                        <a><i className={`fas fa-${icon} fa-2x`}></i></a>
                    </div>
                )
            }
            
        </div>
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
