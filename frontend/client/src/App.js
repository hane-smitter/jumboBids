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
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/pastbids" component={PastBids} />
        <Route path="/product/create" component={Form} />
        <Route path="/detail" component={Detail} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
