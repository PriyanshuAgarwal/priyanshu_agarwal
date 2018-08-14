import React, { Component } from 'react';
import  './css/home.css';
import CompSvg from './animate_svg';

class Home extends Component {
    render() {
      return (
        <div>
            <div className="home-text">
                {/* <div className="row">
                    <h1>Hi,</h1>
                    <h2>I am Priyanshu</h2>
                    <h2>full stack developer</h2>
                </div> */}
                <div className="bttn-wrapper row">
                    <div className= "btn">
                        {/* Explore more */}
                    </div>
                </div>
            </div> 
            <div className="svg-container">
            {/* <CompSvg /> */}
            </div>
        </div>
      );
    }
  }

  export default Home;