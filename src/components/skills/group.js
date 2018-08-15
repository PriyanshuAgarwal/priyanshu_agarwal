import React, { Component } from 'react';
import  '../../css/skill.css';
import PropTypes from 'prop-types';
import _ from 'underscore';
import SkillList from './list';

class SkillGroup extends Component {
  constructor(props) {
    super(props);

    this.getSkillList = this.getSkillList.bind(this);
    this.getChunkData = this.getChunkData.bind(this);
   }

   getChunkData() {
       let skills = JSON.parse(JSON.stringify(this.props.skills));
       const size = 3;
       let arrays = [];

       while (skills.length > 0) {
         arrays.push(skills.splice(0, size));
       }
       return arrays; 
   }

   getSkillList() {
    const chunkData = this.getChunkData();
    return _.map(chunkData, (value, key) => {
          return (
            <SkillList
                skills={value}
            />
        )
    })
   }


  render() {
     return (
      <div>
        <div className='skill-desc-header'>
            {this.props.title}
        </div>
        <div className='skill-desc'>
            {this.getSkillList()}
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
