import React, { Component } from 'react';
import  './css/home.css';
import PropTypes from 'prop-types';
import CompSvg from './animate_svg';

class Home extends Component {
    render() {
      return (
        <div>
            <div className='home-container'>
                <div className="home-text">
                    <div className="row">
                        <div className='extra-large'>Hi,</div>
                        <div className='large'>I am <span>Priyanshu</span></div>
                        <div className='large'>full stack developer</div>
                    </div>
                    <div className="bttn-wrapper row">
                        <div className="btn-ctn" onClick={() => this.props.changeView('about')}>
                            Explore More 
                        </div>
                    </div>
                </div>
                <div className="svg-container">
                    <CompSvg />
                </div>
            </div>
            <div onClick={() => this.props.changeView('about')}>
                <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
            </div>
        </div>
      );
    }
  }

  Home.propTypes = {
      changeView: PropTypes.func
  }

  export default Home;