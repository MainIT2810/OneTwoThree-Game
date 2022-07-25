import React, { Component } from "react";
import {connect} from "react-redux"
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`;
    return (
      <div>
        <div className="text-center playerGame mt-5">
          <style>{keyframe}</style>
          <div className="theThink">
            <img
              src= {this.props.Computer.hinhAnh}
              alt="item"
              style={{
                position: "absolute",
                left: "30%",
                animation: `randomItem${Date.now()} 0.5s`,
                transform: "rotate(120deg)",
              }}
              width={100}
              height={100}
              className="mt-3"
            />
          </div>

          <div className="speech-bubble"></div>
          <img
            src="./image/playerComputer.png"
            alt="player"
            width={125}
            height={150}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    Computer: state.GameReducer.computer,
  });
}

export default connect(mapStateToProps)(Computer);

