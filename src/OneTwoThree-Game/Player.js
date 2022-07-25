import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  renderItem = () => {
    return this.props.player.map((item, index) => {
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid orange" };
      }
      return (
        <div className="col-4" key={index}>
          <button style={border} className="btn btn-success">
            <img src={item.hinhAnh} alt="item" width={50} height={50} />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="text-center playerGame mt-5">
          <div className="theThink">
            <img
              src={this.props.player.find((item) => item.datCuoc === true).hinhAnh}
              alt="item"
              width={100}
              height={100}
              className="mt-3"
            />
          </div>

          <div className="speech-bubble"></div>
          <img src="./image/player.png" alt="player" width={125} height={150} />

          <div className="row">{this.renderItem()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.GameReducer.Player,
  };
};

export default connect(mapStateToProps)(Player);
