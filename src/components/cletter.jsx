import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/canimation.json'

class CLetter extends Component {


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
        margin: '1.5rem',
    }

    return(
      <div style={styles}>
        <Lottie options={defaultOptions}
              height={50}
              width={50}
        />
      </div>
    )
  }
}

export default CLetter