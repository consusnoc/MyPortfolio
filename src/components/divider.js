import React, { Component } from 'react'

class WaveDivider extends Component {


  render(){

    var styles = {
        margin: '10% 8%',
        backgroundSize: '20px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
      <div style={styles}>
        <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="20" viewBox="0 0 1000 33" preserveAspectRatio="xMidYMid meet">
            <defs>
                <clipPath id="clip-divider">
                <rect width="100%" height="100%"/>
                </clipPath>
            </defs>
            <g id="divider" clip-path="url(#clip-divider)">
                <g id="Group_155" data-name="Group 155" transform="translate(-94.5 -78.5)">
                <path id="Path_200" data-name="Path 200" d="M94.5,84.5c21.677,0,21.677,21.756,43.354,21.756S159.531,84.5,181.208,84.5s21.677,21.756,43.354,21.756S246.239,84.5,267.917,84.5s21.677,21.756,43.353,21.756S332.945,84.5,354.622,84.5s21.677,21.756,43.353,21.756S419.653,84.5,441.33,84.5s21.677,21.756,43.353,21.756S506.361,84.5,528.037,84.5s21.678,21.756,43.354,21.756S593.066,84.5,614.741,84.5s21.674,21.756,43.349,21.756S679.764,84.5,701.44,84.5s21.675,21.756,43.352,21.756S766.469,84.5,788.148,84.5s21.676,21.756,43.352,21.756S853.178,84.5,874.854,84.5s21.677,21.756,43.353,21.756S939.885,84.5,961.562,84.5s21.678,21.756,43.355,21.756S1026.6,84.5,1048.274,84.5s21.679,21.756,43.357,21.756S1113.31,84.5,1134.987,84.5s21.677,21.756,43.352,21.756S1200.018,84.5,1221.7,84.5s21.679,21.756,43.357,21.756,21.68-21.756,43.359-21.756,21.68,21.756,43.358,21.756S1373.454,84.5,1395.136,84.5s21.683,21.756,43.364,21.756" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/>
                </g>
            </g>
        </svg>
      </div>
    )
  }
}

export default WaveDivider