import React, { Component } from "react";
import logo from "../images/logoversion2.png";
import footerLogo from "../images/logofooter.png";
import adalabLogo from "../images/logo-adalab.png";

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
        <footer class="footer" role="contentinfo">
          <div class="footer__copy2020">
            <img
              src={footerLogo}
              class="footer__logofrida"
              alt="Logo Frida Kards"
            />
            <small class="footer__copy">&copy; 2020</small>
          </div>
          <a
            href="https://adalab.es/"
            title="Ir a la web de Adalab"
            aria-label="Ir a la web de Adalab"
          >
            <img
              src={adalabLogo}
              alt="Logo Adalab"
              title="Logotipo de Adalab"
              class="footer__logo"
              aria-label="Logotipo de Adalab"
            />
          </a>
        </footer>
      </>
    );
  }
}

export default App;
