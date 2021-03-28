const lightTheme = {
  light: true,
  dark: false,
  color: "black",
  backgroundImage: "linear-gradient(to bottom, #e0e0e0, #ddddde, #d9dadd, #d4d7dc, #cfd4da, #cbd2d9, #c8d0d7, #c4ced6, #c2ccd4, #c0cad3, #bdc9d1, #bbc7cf)",
  boxShadowColor: "rgba(15, 15, 15, 0.6)",

  buttonBackground: "#4A4A4A",
  borderColor: "#4A4A4A",
  buttonColor: "#4A4A4A",
  buttonColorHover: "#E6E6E6",

  inputBackgroundHover: "rgba(255, 255, 255, 0.4)",
  inputBorder: "rgba(15, 15, 15, 0.3)",
  inputBorderHover: "rgba(5,5,5,0.5)",
  inputBorderFocus: "rgba(0,0,0,0.7)",
};

const darkTheme = {
  light: false,
  dark: true,
  color: "white",
  backgroundImage: "linear-gradient(to right top, #403e4a, #35353f, #2b2c35, #22232b, #191b21)",
  boxShadowColor: "rgba(240, 240, 240, 0.6)",

  buttonBackground: "#E6E6E6",
  borderColor: "#E6E6E6",
  buttonColor: "#E6E6E6",
  buttonColorHover: "#4A4A4A",

  inputBackgroundHover: "rgba(0, 0, 0, 0.4)",
  inputBorder: "rgba(245, 245, 245, 0.3)",
  inputBorderHover: "rgba(250,250,250,0.5)",
  inputBorderFocus: "rgba(255,255,255,0.7)",
};

export { lightTheme, darkTheme };