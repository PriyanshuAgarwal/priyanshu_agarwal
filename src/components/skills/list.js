import React, { Component } from 'react';
import  '../../css/skill.css';
import SkillItem from './item';
import PropTypes from 'prop-types';
import _ from 'underscore';

class SkillList extends Component {
  constructor(props) {
    super(props);

    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    return _.map(this.props.skills, (value, key)=> {
        return (
            <SkillItem
                skillName={value.name}
                percentage={value.percentage}
            />
        )
    })
  }


  render() {
    return (
        <div className='skill-progress-list'>
            {this.getItems()}
        </div> 

    );
  }
}

SkillList.propTypes = {
    skills: PropTypes.array
}

export default SkillList;
