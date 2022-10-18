import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./stores";
let persistor = persistStore(store);


ReactDOM.render(
   
      <Provider store={store}>
   {/* <React.StrictMode> */}
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter basename="/">
                  <App />
              </BrowserRouter>
          </PersistGate>
  {/* </React.StrictMode>, */}
      </Provider>,
   
  document.getElementById("root")
);

