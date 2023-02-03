import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    recipediaOrange: {
      main: "#fb8c00",
      dark: "#cf7606",
      // dark red: "#911e1a"
    },
    background: {
      main: "hsl(39, 100%, 93%)",
      dark: "#2b2828",
    },
  },
});

export default theme;
