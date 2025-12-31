import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css"; 

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f80ed",
    },
    background: {
      default: "#f5f7fb",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
