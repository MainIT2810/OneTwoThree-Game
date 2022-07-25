import React, { Component } from 'react'

export default class Computer extends Component {
  render() {
    return (
      <div>
        <div className="text-center playerGame mt-5">
          <div className="theThink">
            <img
              src="./image/bao.png"
              alt="item"
              width={100}
              height={100}
              className="mt-3"
            />
          </div>

          <div className="speech-bubble"></div>
          <img src="./image/playerComputer.png" alt="player" width={125} height={150} />

        </div>
      </div>
    )
  }
}
