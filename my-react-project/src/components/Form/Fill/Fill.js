import React, { Component } from "react";
import menuIcon from "../../../images/fridacolor.png";
import "./Fill.scss";

class Fill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <div className="fill">
          <legend className="js-fill-collapsable fill__container">
            <i className=" fill__icon far fa-keyboard"></i>
            <h2 className="fill__title">Rellena</h2>
            <img
              src={menuIcon}
              alt="Menu"
              className="js-arrow-fill fill__arrow arrow-up"
              aria-label="Desplegar"
            />
          </legend>
          <div className="js-fill hidden">
            <div className="fill__name form">
              <label htmlFor="name">Nombre completo</label>
              <input
                className="js-input form__inp"
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Frida Kahlo"
                required
              />
            </div>
            <div className="fill__job form">
              <label htmlFor="job">Puesto</label>
              <input
                className="js-input form__inp"
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Pintora"
                required
              />
            </div>

            <div className="fill-container-image">
              <div className="fill__action form">
                <label htmlFor="img">Imagen de perfil</label>
                <button
                  className="js__profile-trigger action__upload-btn"
                  type="button"
                >
                  Añadir imagen
                </button>
                <input
                  type="file"
                  name=""
                  id="img-selector"
                  className="js__profile-upload-btn action__hiddenField"
                />
              </div>
              <div className="fill__profile form">
                <div className="js__profile-image"></div>
                <div className="js__profile-preview profile__preview"></div>
              </div>
            </div>

            <div className="fill_email form">
              <label htmlFor="email">Email</label>
              <input
                className="js-input form__inp"
                type="email"
                id="email"
                name="email"
                placeholder="Ej: frida.Kahlo@gmail.com"
                required
              />
            </div>
            <div className="fill_phone form">
              <label htmlFor="phone">Teléfono</label>
              <input
                className="js-input form__inp"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 698 55 43 95"
              />
            </div>
            <div className="fill__linkedin form">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                className="js-input form__inp"
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: linkedin.com/in/frida-kahlo"
              />
            </div>
            <div className="fill__github form">
              <label htmlFor="github">Github</label>
              <input
                className="js-input form__inp"
                type="text"
                id="github"
                name="github"
                placeholder="Ej: frida-kahlo"
              />
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Fill;
