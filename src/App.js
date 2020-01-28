import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/productos";
import Supermercado from "./components/supermercado";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Supermercado</h1>
          <Productos></Productos>
          <Supermercado></Supermercado>
        </div>
      </Provider>
    );
  }
}

export default App;
