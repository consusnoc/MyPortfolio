import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/data.json'

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
              height={420}
              width={700}
        />
      </div>
    )
  }
}

export default UncontrolledLottie