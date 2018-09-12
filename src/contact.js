import React, { Component } from 'react';
import  './css/contact.css';


class Contact extends Component {
    render() {
      return (
        <div className='skill-container'>
        <div className='skill-header'>
            <div className='skill-title'>
                Contact Me
            </div>
        </div>
        <div className='contact-form-ctn'>
            <div className='contact'>
                <div className='contact-form'>
                    <form>
                        <label>Name</label>
                        <input  placeholder="Write your name here..." value= ""></input>
                        <label>Email</label>
                        <input placeholder="Please let me know how to contact you back..." value= ""></input>
                        <label>Message</label>
                        <input placeholder="Please neter your message here" value= ""></input>
                    </form>

                </div>
                <div className='contact-social'>
                    <div clssName='contact-social-media-icon-ctn'>
                       <div class="img-ctn social-media-icon">
                       <a href="" target='_top'>
                            <img src={require('./images/email-color.svg')} alt='email' title ='email'/>
                       </a>
                       </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Contact;