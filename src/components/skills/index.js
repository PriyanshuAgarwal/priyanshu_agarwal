import React, { Component } from 'react';
import  '../../css/skill.css';
import $ from "jquery";

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: null
        }

        this.fetchSkillData = this.fetchSkillData.bind(this);
    }

    fetchSkillData() {
        $.getJSON("skill.json", (response) => {
            this.setState({skills: response});
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
            <div className='skill-desc-ctn'>
                <div className='skill-desc-header'>
                    Languages
                </div>
                <div className='skill-desc'>
                    <div className='skill-progress-list'>
                        <div className='skill-progress-item'>
                            <span>JAVA</span>
                        </div>
                        <div className='skill-progress-item'>
                            <span>JAVASCript</span>
                        </div>
                        <div className='skill-progress-item'>
                            <span>REactJS</span>
                        </div>
                    </div>
                    <div className='skill-progress-list'>
                        <div className='skill-progress-item'>
                            <span>JAVA</span>
                        </div>
                        <div className='skill-progress-item'>
                            <span>JAVASCript</span>
                        </div>
                        <div className='skill-progress-item'>
                            <span>REactJS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Skill;