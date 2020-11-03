import React, { Component } from "react";
import logo from "../images/logoversion2.png";
import "../stylesheets/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header class="cards-header" role="banner">
          <a href="index.html">
            <img
              src={logo}
              alt="Logo de Frida Kards"
              title="Ir a la página de inicio"
              class="cards-header__logo"
              aria-label="Logotipo de Frida Kards"
            />
          </a>
        </header>
      </>
    );
  }
}

export default App;
