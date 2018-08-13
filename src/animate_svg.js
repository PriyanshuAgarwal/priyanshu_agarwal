import React, { Component } from 'react';
const desktopLines = ["me = Person()", "while me.awake(): ", "me.code()"]
class CompSvg extends Component {

  constructor(props) {
    super(props)
    this.state = {
      smoke1: -276,
      smoke2: -276,
      smoke3: -276,
      smoke4: -276,
      smoke5: -276,
      currentText: '',
      lineIndex: 0,
      currentIndex1: 0,
      currentIndex2: 0,
      currentIndex3: 0,
    }
    this.typeWriterEffect = this.typeWriterEffect.bind(this);
  }

  typeWriterEffect()  {

    this.setState(currentState => {
      const {
        lineIndex,
        currentIndex1,
        currentIndex2,
        currentIndex3
      } = currentState

      if (lineIndex === 0) {
        if (currentIndex1 === desktopLines[0].length) {
          return {
            lineIndex: 1
          }
        } else {
          return {
            currentIndex1: currentIndex1 + 1
          }
        }
      } else if (lineIndex === 1) {
        if (currentIndex2 === desktopLines[1].length) {
          return {
            lineIndex: 2,

          }
        } else {
          return {
            currentIndex2: currentIndex2 + 1
          }
        }
      } else {
        if (currentIndex3 === desktopLines[2].length) {
          return {
            lineIndex: 0,
            currentIndex1: 0,
            currentIndex2: 0,
            currentIndex3: 0
          }
        } else {
          return {
            currentIndex3: currentIndex3 + 1
          }
        }
      }
    }, () => setTimeout(this.typeWriterEffect, 300))
  }

  moveUp(key, topLimit) {
    this.setState((prevState, props) => {
      const prev = prevState[key];
      const value = (prev === topLimit) ? -276 : prev - 1;
      return {
        [key]: value
      }
    })

  }


  componentDidMount() {
    setInterval(() => this.moveUp('smoke1', -310), 40);
    setInterval(() => this.moveUp('smoke2', -300), 90);
    setInterval(() => this.moveUp('smoke3', -315), 60);
    setInterval(() => this.moveUp('smoke4', -310), 95);
    setInterval(() => this.moveUp('smoke5', -320), 30);
    setTimeout(this.typeWriterEffect, 1000);
  }

  render() {

    const {
      smoke1,
      smoke2,
      smoke3,
      smoke4,
      smoke5
    } = this.state;

    return (
      <svg viewBox="0 0 640.04 387.39" xmlns="http://www.w3.org/2000/svg" style={{height: '300px'}} data-name="Layer 1">
        <title>Priyanshu</title>

        <polygon className="cls-1" points="193.99 324.58 235.94 335.64 253.79 331.62 262.39 333.1 235.11 338.56 193.99 326.46 193.99 324.58"/>
        <path className="cls-1" d="M738.9,336.92s-4.59,8.76-4.18,15.86l8.77,12.1s2.71,1.72,0,10.33-4.25,23.8-3.79,28.65c0,0,2.5,5.48,5,6.1v3l3.28,3,2.81,3.45s.94,3.28.94,10.48A8.48,8.48,0,0,0,756.9,436l11.43,1.1s9.86,4.53,13.62,4.38l1.87,3.29s9.55-3.92,10.49-5.48c0,0,11.58-13.78,17.69-16.75a39.23,39.23,0,0,1,19.41-8.3s8.3.16,23-2c0,0-2.82-13.15-1.56-14.72,0,0,5.63-6.89,7.35-11s6.26-14.24,5.95-14.08,3.29-15.19,3.76-19.41,0-24.27-3.13-28.81c0,0-4.7-16.28-12.68-21.75s-12.68-8.93-14.09-9.08-2.35-8-6.26-9.4c0,0-11.9-9.7-30.21-7.35,0,0-31,0-60.11,30.52,0,0-10.49,11.43-12.37,24.42,0,0-.14,6.76,1.88,11.9C733,343.44,735.45,336,738.9,336.92Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-2" d="M771.77,356l-47.27,7.2s-3.6-1.56-1.41-4.85l49.78-3.76Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-2" d="M722.07,359.9c-.36.52-3.74,4.3,2.58,6.24,0,0,1.88,2.66,3.6,10.17a7.14,7.14,0,0,0,5.17,4.07h8.73c.19,0,0-2.19,0-2.19l-6.7.15s-3.91-1.25-4.38-4.07l-3-11.65S722.38,365.13,722.07,359.9Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M772.87,358.86s-1.62-9.84,6.1-7.54c0,0,10.44,1.46,9.6,20.66,0,0,.63,9-2.71,13.77,0,0-4.18,1.88-4,4.8,0,0-5.21,2.93-6.47-2.5,0,0-1-8.56.84-9.39,0,0,4-1.67,4.41-3.34,0,0,1.49-4.07,0-6.21s-1.07-5.95-1.07-5.95,1.3-6.73-2.72-7.67,1,8.66.21,7.67S772.87,358.86,772.87,358.86Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M744.7,369.11l-11.06,13.72s-3.55,6.89,4.17,11.06h3.27s.7-14.81,2.78-17.74C743.86,376.15,745.32,371.67,744.7,369.11Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M784.61,444.4l-6.58,10,3.29,5.64L757.06,471s-24.42,7.2-23.8,23.17c0,0-6.26,6.89-9.08,7.2,0,0-42.26,61.36-57,69.82,0,0-13.47,9.07-15,10.95s-14.09,5.64-14.09,5.64l-3.13,2.5-14.09,1.88s-16.28,2.51-16.9,43.2c0,0,5.94,21.6,18.78,24.42h39.13l2.51-4.07,8.76,2.2,2.82-1.26.63-2.19h7.2l6-5.32,11.58-9.71,9.08-1.87h8.14l6.57-1.88,1.88,2.82.63,8.76-3.13.94-.63,3.76.31,5L722,662.62H900.33c29.34-90.45,4.29-205,4.29-205l-8.87-17.29-12.53-8.45-5.63-1.57h-2.82l-.94-2.81-.63-5.95-.62-5.32-.63-4.07s-5.63-2.51-16.9,0c0,0-20.82,2.34-22.23,2.19l-1.41-.16a56.49,56.49,0,0,0-23.32,10.18c-11.27,8.45-7.52,7.92-7.52,7.92l-7.51,9Z" transform="translate(-275.04 -275.73)">
        </path>
        <path className="cls-1" d="M378.81,316.06c-3.68.28-14.63,3.8-14.34,22.11l6.25,222.49s1.26,7.93,14.2,8.34l254.63-18s5.84-.41,6.68-5.84V521L377,536.83l-2.55-209.52S374,318.16,378.81,316.06Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M377,536.83l269.24-15.41-3.44-185s0-11.27-9.08-10L379.08,316s-5.95-.54-5,19.21Z" transform="translate(-275.04 -275.73)"> 
          <animate attributeName="startOffset" values="0;.7;1" dur="8s" repeatCount="indefinite" />
        </path>
        <path className="cls-1" d="M439.71,565.14s-7,22.65,7.57,23.9L479,596.55l6.42-1.28L490,594.1l-3.49,2.45S478,598.43,474,598l-32.88-7.35s-9.77-5.55-4-25.47Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M438.6,565.22l58.61-4.2s-1.41,11.9,2.19,12.84c0,0-2.35,1.41-2.5,3.13,0,0-3.92,1.56-4.54,3.91,0,0-1.57,12.05,0,12.84h-3l-11,2.81-34.12-7.82S433.12,585.88,438.6,565.22Z" transform="translate(-275.04 -275.73)"/>
        <polygon className="cls-1" points="299.74 309.17 299.74 309.17 356.37 303.06 368.43 309.49 323.6 316.75 299.74 309.17"/>
        <path className="cls-3" d="M291.75,632.15a26.32,26.32,0,0,1,.38,3.85s38.25,2.31,54.94-2c0,0,.39-3.71,1.17-3.71s-.88.13-.88.13S317.31,634,291.75,632.15Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-3" d="M361.14,622.58s2.2,6.73-18.47,8.3c0,0-49.78,4.54-62.3-.94,0,0-11.43-2.82,0-8.3a177.57,177.57,0,0,1,17.8-3.35,10.72,10.72,0,0,0,3.57,4.78c2.73,2,16,2.87,16,2.87,11.2-1.12,16.8-3.26,17.1-3.74l2.74-5.33A87.12,87.12,0,0,1,348,618.35S356.76,619.14,361.14,622.58Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M293.58,588.4s-.5,18,4,28.63a15.11,15.11,0,0,0,4.15,6s13,6.18,32.79-.39a28.42,28.42,0,0,0,3.6-9.08s7.59-12.37,4.78-21.21c0,0-1.65-1.41-3.37,1.33l2.25-5.43s-10.15,3.63-27.06,3.24C314.73,591.53,299.11,591.68,293.58,588.4Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M293.68,588.4s1.4,3.34,25.49,3.16c0,0,16.61.18,22.56-3.16,0,0,2.35-3.15-11.23-4.23C330.5,584.17,291.33,583.23,293.68,588.4Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-3" d="M339.85,595.52s3,6.81-4.07,12.6C335.78,608.12,340.56,597.48,339.85,595.52Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1" d="M606.47,643.83,604.59,636s-3.13-34.12,14.4-43.52H598.64l-33.5-10.64-10.95-3.44s-12.21-5.33-14.4-5.64l2.19.31s-14.09-6.26-15-7.2-3.91.79-4.7,2c0,0-7.2-1.1-9.86.78,0,0-11.42.16-15.65,8.14a9.3,9.3,0,0,0-4.38,4.07s-1.41,10.8,0,13.15l3.6-1.57.62-3.91,4.7,1.41s-18.32,9.24-18.47,11c0,0-1.72,8,3.28,5.95,0,0,7.67-3.6,8.14-3.76s8.61-2,8.61-2,4.7.16,6.27.16,17.06,6.26,19.72,6.1c0,0,15.18,3,16.59,1.88,0,0,9.08,3.13,14.56,9.55a224.49,224.49,0,0,0,26.77,14.09S604.75,640.7,606.47,643.83Z" transform="translate(-275.04 -275.73)"/>
        <path className="cls-1 path" 
              d="M302.44,563.21a12.41,12.41,0,0,1,1.33,2.52c1,3.42-3,7.11-1.44,10.32.81,1.66,3,2.89,2.59,4.69a1.86,1.86,0,0,0,.23-2.45c-.45-.79-1.17-1.41-1.54-2.24-1.09-2.45,1.38-5,1.57-7.72.21-2.86-2.14-4.66-2.66-7.24s0-4.42.39-6.74C301,556.67,301,560.52,302.44,563.21Z" 
              transform={`translate(-275.04 ${smoke1})`}/>
        <path className="cls-1" 
              d="M311.6,564.74c-1.42,1-.86,3.22.11,4.64s2.27,3,1.86,4.65c-.3,1.23-1.46,2.08-1.89,3.28s.93,2.93,1.84,2a1.35,1.35,0,0,1-1-2.22,5.77,5.77,0,0,0,.78-.6,1.75,1.75,0,0,0,.26-1.11l.08-4.07a3.45,3.45,0,0,0-.33-1.91,1.18,1.18,0,0,0-1.67-.44l-.13-4" 
              transform={`translate(-275.04 ${smoke2})`}/>
        <path className="cls-1 path" 
              d="M323.88,568c-.14,2.18-1.21,4.18-1.76,6.3s-.39,4.71,1.35,6l-2.41-4.76a2.68,2.68,0,0,0,2.46-1.7,7.81,7.81,0,0,0,.46-3.12c.07-5.54-.77-9.28-3.79-13.71C318.68,561.37,324.18,563.49,323.88,568Z" 
              transform={`translate(-275.04 ${smoke3})`}/>
        <path className="cls-1" 
              d="M330.59,571.08c.79.67.52,2,0,2.85s-1.28,1.75-1.29,2.79.9,2.07,1.56,3,1,2.4.14,3.13l1.29.48c1-.92.27-2.52-.53-3.57s-1.76-2.36-1.2-3.55c.27-.56.85-1,.86-1.62s-.61-1.12-1.08-1.6-.74-1.38-.17-1.72" 
              transform={`translate(-275.04 ${smoke4})`}/>
        <path className="cls-1 path" 
              d="M312.06,546.91c.4,1.28,1,2.59.71,3.89a8.85,8.85,0,0,1-1,2.2,6.18,6.18,0,0,0-.82,3.57,3.73,3.73,0,0,0,2,3c-.85-.07-1.09-1.19-1.1-2a8.69,8.69,0,0,1,.63-4.21c.28-.55.68-1,1-1.58.87-1.82.2-4-.55-5.84a12,12,0,0,1-1.21-5.17A13.21,13.21,0,0,0,312.06,546.91Z" 
              transform={`translate(-275.04 ${smoke5})`}/>
       <path id="p1" className="cls-5" d="M387.67,356.33l242.66,6.34" transform="translate(-274.79 -275.73)" />
    <path id="p2" className="cls-5" d="M387.67,378l242.66,4" transform="translate(-274.79 -275.73)" />
    <path id="p3" className="cls-5" d="M388.68,399.07l242.64,3.86" transform="translate(-274.79 -275.73)" />
 
        <text fontFamily="Consolas" fill='#0192C9'>
		      <textPath xlinkHref="#p1" startOffset="0%">
            {`${desktopLines[0].substr(0, this.state.currentIndex1)}${(this.state.lineIndex === 0 ? '|' : '')}`}
          </textPath>
	      </text>

         <text fontFamily="Consolas" fill='#0192C9'>
		      <textPath xlinkHref="#p2" startOffset="0%">
          {`${desktopLines[1].substr(0, this.state.currentIndex2)}${(this.state.lineIndex === 1 ? '|' : '')}`}
          </textPath>
	      </text>
        <text fontFamily="Consolas" fill='#0192C9'>
		      <textPath xlinkHref="#p3" startOffset="15%">
          {`${desktopLines[2].substr(0, this.state.currentIndex3)}${( this.state.lineIndex === 2 ? '|' : '')}`}
          </textPath>
	      </text>
  </svg>
      )
  }
}

export default CompSvg;
