import React, { Component } from 'react';
import  './css/skill.css';

class Skill extends Component {
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
                    <div className='skill-progress-item'>
                        <span>JAVA</span>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Skill;