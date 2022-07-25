import React, { Component } from "react";

export default class Player extends Component {
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
          <img src="./image/player.png" alt="player" width={125} height={150} />

          <div className="row">
            <div className="col-4">
              <button className="btn btn-success">
                <img src="./image/keo.png" alt="item" width={50} height={50} />
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-success">
                <img src="./image/bua.png" alt="item" width={50} height={50} />
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-success">
                <img src="./image/bao.png" alt="item" width={50} height={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
