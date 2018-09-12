import React, { Component } from 'react';
import  '../../css/skill.css';
import PropTypes from 'prop-types';

class SkillItem extends Component {
  constructor(props) {
    super(props);
    // this.enableProgressBar = this.enableProgressBar.bind(this);
    // this.disableProgressBar = this.disableProgressBar.bind(this);
  }

  // enableProgressBar(event) {
  //   const { percentage } = this.props;
  //   console.log("Inside enable progressbar");
  //   console.log(event.target);
  //   console.log(event.target.childNodes);
  //   event.target.childNodes[0].style.width = `${percentage}%`;
  //   event.target.childNodes[1].style.width = '0px';
  // //   document.getElementsByClassName("skill-progress-bar")[key].style.width = `${percentage}%`;
  // //   document.getElementsByClassName("skill-progress-text")[key].style.width = "0px";
  // }


  // disableProgressBar(event){
  //   const { key } = this.props;
  //   event.target.childNodes[0].style.width = `0px`;
  //   event.target.childNodes[1].style.width = '100px';
  //   // document.getElementsByClassName("skill-progress-bar")[key].style.width = "0px";
  //   // document.getElementByClassName("skill-progress-text").style.width = "0px;
  // }

  render() {
    return (
      <div className="skill-progress-item">
        <div className="skill-progress-bar">
          {this.props.percentage/10} / 10
        </div>
        <div className="skill-progress-text">{this.props.skillName}</div>
      </div>
    );
  }
}

SkillItem.propTypes = {
    skillName: PropTypes.string,
    percentage: PropTypes.number,
    key: PropTypes.number

}

export default SkillItem;
