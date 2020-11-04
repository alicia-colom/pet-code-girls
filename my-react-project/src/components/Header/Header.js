import React, { Component } from "react";
import logo from "../../images/logoversion2.png";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="cards-header" role="banner">
        <a href="index.html">
          <img
            src={logo}
            alt="Logo de Frida Kards"
            title="Ir a la página de inicio"
            className="cards-header__logo"
            aria-label="Logotipo de Frida Kards"
          />
        </a>
      </header>
    );
  }
}

export default Header;
