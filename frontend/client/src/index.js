import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AnimatePresence } from "framer-motion";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material/styles";

import "./components/Fonts/TickingTimebombBB.ttf";
import reducers from "./reducers";
import "./index.css";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <AnimatePresence>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </AnimatePresence>
  </Provider>,
  document.getElementById("root")
);
