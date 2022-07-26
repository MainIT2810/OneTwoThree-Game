import React, { Component } from "react";
import { connect } from "react-redux";
class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-5 mb-3 text-warning">{this.props.ketQua}</div>

        <div className="display-5 text-success">
          Số bàn thắng: <span>{this.props.soBanThang}</span>
        </div>

        <div className="display-5 text-success">
          Tổng số bàn chơi: <span>{this.props.tongSoManChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameReducer.ketQua,
    soBanThang: state.GameReducer.soBanThang,
    tongSoManChoi: state.GameReducer.tongSoManChoi,
  };
};

export default connect(mapStateToProps)(GameInfo);
