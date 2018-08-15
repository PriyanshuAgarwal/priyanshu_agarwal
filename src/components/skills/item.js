import React, { Component } from 'react';
import  '../../css/skill.css';
import PropTypes from 'prop-types';

class SkillItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill-progress-item">
        <span>{this.props.skillName}</span>
      </div>
    );
  }
}

SkillItem.propTypes = {
    skillName: PropTypes.string,
    percentage: PropTypes.number

}

export default SkillItem;
