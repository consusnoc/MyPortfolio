import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/eye.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    var styles = {
        margin: '50px 0',
    }

    return(
      <div style={styles}>
        <Lottie options={defaultOptions}
              height={560}
              width={900}
        />
      </div>
    )
  }
}

export default UncontrolledLottie