import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fonts Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";  // 🟢 import router

const theme = createTheme({
  palette: {
    mode: "light", // ou "dark"
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>   {/* 🟢 router englobant */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
