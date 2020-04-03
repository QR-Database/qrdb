import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
<<<<<<< HEAD
import 'materialize-css';
=======
import 'materialize-css/dist/css/materialize.min.css'

>>>>>>> 93d7d98bc8a741ba702e444b7de3ed10b23aaf2f

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />  
    </Router>
  </ReduxProvider>,
  document.getElementById("app"),

);
