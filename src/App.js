import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Animales from "./components/animales";
import DestinoAnimal from "./components/destinoAnimal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Protectora de animales</h1>
          <Animales></Animales>
          <DestinoAnimal></DestinoAnimal>
        </div>
      </Provider>
    );
  }
}

export default App;
