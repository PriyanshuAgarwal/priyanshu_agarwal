import React, { Component } from 'react';
import  '../../css/skill.css';
import $ from "jquery";
import SkillGroup from './group';
import _ from 'underscore';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: null
        }

        this.fetchSkillData = this.fetchSkillData.bind(this);
        this.getGroupData = this.getGroupData.bind(this);
    }

    fetchSkillData() {
        $.getJSON("skill.json", (response) => {
            this.setState({skills: response});
        })
    }

    getGroupData() {
       return _.map(this.state.skills, (value, key) => {
            return (
                <div className='skill-desc-ctn'>
                    <SkillGroup
                        title={key}
                        key={key}
                        skills={value}
                    />
                </div>
                )
        })
    }

    componentDidMount() {
        this.fetchSkillData();
    }

    render() {
      return (
        <div className='skill-container'>
            <div className='skill-header'>
                <div className='skill-title'>
                    Skills
                </div>
            </div>
            {
                this.getGroupData()
            }
        </div>
      );
    }
  }

  export default Skill;