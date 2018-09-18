import React, { Component } from 'react';
import  './css/profile.css';

class Profile extends Component {
    render() {
      return (
        <div className='profile-container'>
            <div className='profile'>
                <div className='profile-img'>
                    <img src={require('./images/profile_pic.jpeg')} />
                </div>
                <div className='profile-description-ctn'>
                    <div className='profile-description'>
                        <div>A Web Developer who loves working on Frontend and Backend Technologies.</div>
                        <div>Currently pursuing MS in Computer Science from University of Florida. </div>
                        <div>I have a keen interest in Algorithms and Data Structures and love using them in real world scenario.</div>
                        <div>I love my family and friends.</div>
                        <div>I am thankful to God everyday.</div>
                        <div className='go-gator'>Go Gators ! 🐊</div>
                    </div>
                    <div className="bttn-wrapper">
                        <div className="btn-ctn">
                            Download my resume 
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill-container'>
            <div className='skill-header'>
                <div className='module-header m-t-10'>
                    Experience
                </div>
            </div>
            <div class="experiance-wrapper-div">
                <div class="work-item">
                    <div class="work-item-left-ctn">
                        <div class="work-item-left-body">
                            <div class="work-item-month">
                            <p class="work-item-text">FEB - NOV</p>
                            </div>
                            <div class="work-item-year">
                            <p class="work-item-text">2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="square square-position-1">
                        <div class="circle"></div>
                    </div>
                    <div class="work-item-right-ctn">
                        <div class="work-item-right-body">
                            <div class="work-img">
                                {/* <img class="" src="/static/media/hashedin.2ab4b52d.svg" alt="HASHEDIN TECHNOLOGIES"> */}
                            </div>
                            <div class="work-seperator"></div>
                            <div class="work-company-desc">
                            <div class="work-company-header">
                                <p>HASHEDIN TECHNOLOGIES</p>
                            </div>
                            <div class="work-company-post">
                                <p>Technology Analyst &amp; Software Engineer Intern</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-item-left-ctn">
                        <div class="work-item-left-body">
                            <div class="work-item-month">
                            <p class="work-item-text">NOV - JAN</p>
                            </div>
                            <div class="work-item-year">
                            <p class="work-item-text">2015 - 16</p>
                            </div>
                        </div>
                    </div>
                    <div class="square square-position-2" >
                        <div class="circle"></div>
                    </div>
                    <div class="work-item-right-ctn">
                        <div class="work-item-right-body" >
                            <div class="work-img">
                             {/* <img class="trailing-space" src="" alt="SUPPLIFIED TECHNOLOGIES"> */}
                            </div>
                            <div class="work-seperator"></div>
                            <div class="work-company-desc">
                            <div class="work-company-header">
                                <p>SUPPLIFIED TECHNOLOGIES</p>
                            </div>
                            <div class="work-company-post">
                                <p>Software Engineer Intern</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
    }
  }

  export default Profile;