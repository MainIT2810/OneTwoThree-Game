import React, { Component } from "react";
import "./assets/CSS/style.css";
import Computer from "./Computer";
import GameInfo from "./GameInfo";
import Player from "./Player";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>

          <div className="col-4">
            <GameInfo />
            <button
              className="btn btn-success p-2 display-4 mt-3"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play game
            </button>
          </div>

          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
