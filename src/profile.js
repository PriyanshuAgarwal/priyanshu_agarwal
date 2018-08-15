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
                   <div className='profile-description'>A Web Developer who loves working on Frontend and Backend Technologies.</div>
                    <div className='profile-description'>Currently pursuing MS in Computer Science from University of Florida. </div>
                    <div className='profile-description'>I have a keen interest in Algorithms and Data Structures and love using them in real world scenario.</div>
                    <div className='profile-description'>I love my family and friends.</div>
                    <div className='profile-description'>I am thankful to God everyday.</div>
                    <div className='profile-description'>Go Gators ! 🐊</div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Profile;