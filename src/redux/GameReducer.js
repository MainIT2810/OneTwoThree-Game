const stateDefault = {
  ketQua: "I LOVE YOU 3000!!!",
  soBanThang: 0,
  tongSoManChoi: 0,
  Player: [
    { ma: "keo", hinhAnh: "./image/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./image/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./image/bao.png", datCuoc: false },
  ],

  computer: { ma: "keo", hinhAnh: "./image/keo.png" },
};

const GameReducer = (state = stateDefault, action) => {
  return { ...state };
};

export default GameReducer;
