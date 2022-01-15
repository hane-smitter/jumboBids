import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from "./components/Home";
import Form from './components/Form/Form';
import Faqs from './components/Faqs';
import PastBids from './components/PastBids';
import Register from './components/Register';
import Login from './components/Login';
import Detail from './components/Products/Product/Details';

const easyBg = createTheme({
  palette: {
    background: {
      default: "rgb(250, 249, 252)"
    },
  },
  fontFamily: 'Open Sans'
  })

const App = () => {
  return (
    <ThemeProvider theme={easyBg}>
      <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/pastbids" element={<PastBids />} />
        <Route path="/product/create" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
