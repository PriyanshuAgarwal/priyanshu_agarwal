import React, { Component } from 'react';
import  '../../css/skill.css';
import PropTypes from 'prop-types';
import _ from 'underscore';
import SkillList from './list';

class SkillGroup extends Component {
  constructor(props) {
    super(props);

    this.getSkillList = this.getSkillList.bind(this);
   }

   getSkillList() {
       return _.map(this.props.skills, (value, key) => {
            return (
               <div className='skill-progress-list'>
                    <SkillList
                       skills={this.props.skills}
                    />
               </div> 
            )
       })
   }


  render() {
    return (
      <div className="">
        <div className='skill-desc-header'>
            {this.props.title}
        </div>
        <div className='skill-desc'>
            {/* {this.getSkillList()} */}
 
                <SkillList
                    skills={this.props.skills}
                />

        </div>
      </div>
    );
  }
}

SkillGroup.propTypes = {
    title: PropTypes.string,
    skills: PropTypes.array
}

export default SkillGroup;
