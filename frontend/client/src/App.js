import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blue } from "@mui/material/colors";

import Home from "./components/Home";
import Form from "./components/Form/Form";
import Faqs from "./components/Faqs";
import PastBids from "./components/PastBids";
import Register from "./components/Register";
import Login from "./components/Login";
import Detail from "./components/Products/Product/Details";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    common: {
      black: "#1D1E20",
    },
    primary: {
      main: blue["A200"],
      light: blue[300],
      dark: blue[800],
      contrastText: "#ffffff",
    },
    secondary: {
      main: amber[400],
      light: amber[300],
      dark: amber[700],
      contrastText: "#ffffff",
    },
    background: {
      default: "rgb(250, 249, 252)",
    },
  },
  typography: {
    htmlFontSize: 15,
    fontFamily: [
      "Lato",
      "sans-serif",
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/faqs"
            element={
              <Layout>
                <Faqs />
              </Layout>
            }
          />
          <Route
            path="/pastbids"
            element={
              <Layout>
                <PastBids />
              </Layout>
            }
          />
          <Route path="/product/create" element={<Form />} />
          <Route
            path="/detail"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
