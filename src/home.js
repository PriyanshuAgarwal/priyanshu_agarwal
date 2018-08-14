import React, { Component } from 'react';
import  './css/home.css';
import CompSvg from './animate_svg';

class Home extends Component {
    render() {
      return (
        <div>
            <div class='home-container'>
                <div className="">
                    {/* <div className="row">
                        <h1>Hi,</h1>
                        <h2>I am Priyanshu</h2>
                        <h2>full stack developer</h2>
                    </div> */}
                        <div className="row">
                        <h1>lm,</h1>
                        <h2>l hs awsblrdkw</h2>
                        <h2>qwz lkwaq sqwcpolvr</h2>
                    </div>
                    <div className="bttn-wrapper row">
                        <div className= "btn">
                            erolpxE erom
                        </div>
                    </div>
                </div>
                <div className="svg-container">
                    <CompSvg />
                </div>
            </div>
            <div>
                <i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i>
            </div>
        </div>
      );
    }
  }

  export default Home;