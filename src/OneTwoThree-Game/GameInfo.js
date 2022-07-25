import React, { Component } from 'react'

export default class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-5 mb-3 text-warning">
          I love you 3000! 
        </div>

        <div className="display-5 text-success">
          Số bàn thắng: <span>0</span>
        </div>

        <div className="display-5 text-success">
        Tổng số bàn chơi: <span>0</span>
        </div>

      </div>
    )
  }
}
