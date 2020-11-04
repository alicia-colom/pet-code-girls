import React, { Component } from "react";
import menuIcon from "../../../images/fridacolor.png";
import "./FormMenu.scss";

class FormMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="js-design-collapsable design__title">
        <legend className="design__legend">
          <i className="far fa-object-ungroup design__icon"></i>
          <h2 className="design__legend--title">Diseña</h2>
          <img
            src={menuIcon}
            alt="Menu"
            className="js-arrow-design design__arrow arrow-up"
            aria-label="Desplegar"
          />
        </legend>
      </div>
    );
  }
}

export default FormMenu;
