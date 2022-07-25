const stateDefault = {
  ketQua: "I LOVE YOU 3000!!!",
  soBanThang: 0,
  tongSoManChoi: 0,
  BetArr: [
    { ma: "keo", hinhAnh: "./image/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./image/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./image/bao.png", datCuoc: false },
  ],

  computer: { ma: "keo", hinhAnh: "./image/keo.png" },
};

const GameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // Reset player
      let PlayerBetUpdate = [...state.BetArr];

      // Tạo ra mảng BetArr mới từ BetArr cũ và action. maCuoc do user dispatch lên

      PlayerBetUpdate = PlayerBetUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // Cập nhật state player = PlayerBetUpdate
      state.BetArr = PlayerBetUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      console.log("Số ngẫu nhiên", soNgauNhien);

      let quanCuocNgauNhien = state.BetArr[soNgauNhien];
      console.log("Quân cược ngẫu nhiên", quanCuocNgauNhien);

      state.computer = quanCuocNgauNhien;

      return { ...state };
    }

    case "END_GAME": {
      let player = state.BetArr.find((item) => item.datCuoc);
      let computer = state.computer;
      state.tongSoManChoi += 1;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà Nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua SML!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoà Nhau!!!";
          } else {
            state.ketQua = "Thua SML!!!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua SML!!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          } else {
            state.ketQua = "Hoà Nhau!!!";
          }
          break;

        default:
          state.ketQua = "I'm iron man, i love you 3000 !!!";
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default GameReducer;
