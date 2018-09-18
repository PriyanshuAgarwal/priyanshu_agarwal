import React, { Component } from 'react';
import  '../../css/skill.css';
import PropTypes from 'prop-types';

class SkillItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const skillValue = this.props.percentage/10;
    return (
      <div className="skill-progress-item">
        <div className={`skill-progress-bar percentage-${skillValue}`}>
          <span className='skill-progress-value'>{ `${skillValue}/ 10` } </span>
        </div>
         <div className="skill-progress-text">{this.props.skillName}</div>
      </div>
    );
  }
}

SkillItem.propTypes = {
    skillName: PropTypes.string,
    percentage: PropTypes.string,
    key: PropTypes.number

}

export default SkillItem;
