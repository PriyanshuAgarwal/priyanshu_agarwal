import React, { Component } from 'react';
import  './css/project.css';


class Project extends Component {

    renderList() {
        return (
            <div className='temp'>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        Advertkit
                    </div>
                </div>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        Reportgarden
                    </div>
                </div>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        getKitsune
                    </div>
                </div>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        The US in numbers
                    </div>
                </div>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        The US in numbers
                    </div>
                </div>
                <div className='project-item' style={{backgroundColor: 'rgb(61,68,194)'}}>
                    <div className='projct-title'>
                        The US in numbers
                    </div>
                </div>
            </div>
        )
    }

    render() {
      return (
        <div className='skill-container'>
            <div className='skill-header'>
                <div className='skill-title'>
                    Projects
                </div>
            </div>
            <div className='project-container'>
                <div className='project-list'>
                    {this.renderList()}
                </div>
            </div>
        </div>
      );
    }
  }

  export default Project;