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

    default:
      break;
  }
  return { ...state };
};

export default GameReducer;
