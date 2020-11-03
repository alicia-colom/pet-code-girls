import React, { Component } from "react";
import logo from "../images/logoversion2.png";
import footerLogo from "../images/logofooter.png";
import adalabLogo from "../images/logo-adalab.png";
import menuIcon from "../images/fridacolor.png";

import "../stylesheets/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* Header */}
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

        {/* Main */}
        <main className="cards-main" role="main">
          {/* Photo */}
          <section className="card-preview">
            <div className="card-reset">
              <button
                type="reset"
                className="card-reset__btn js-reset"
                aria-label="Reset"
              >
                <i className="far fa-trash-alt"></i>
                Reset
              </button>
            </div>
            <div className="card">
              <div className="card-head js-border">
                <h1 className="card-head__title js-name">Nombre Apellido</h1>
                <h2 className="card-head__subtitle js-job">
                  Front-end developer
                </h2>
              </div>
              <div className="card__image js__profile-image"></div>
              <ul className="card-list">
                <li className="card-list__item">
                  <a
                    href="#"
                    className="card-list__link js-tel"
                    aria-label="Teléfono"
                  >
                    <div className="card-list__icon-container js-border-tel">
                      <i className="fas fa-mobile-alt card-list__icons js-color-tel"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: irenecorreas28@gmail.com"
                    className="card-list__link js-email"
                    aria-label="Email"
                  >
                    <div className="card-list__icon-container js-border-email">
                      <i className="fas fa-envelope card-list__icons js-color-email"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    className="card-list__link js-linkedin"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <div className="card-list__icon-container js-border-linkedin">
                      <i className="fab fa-linkedin-in card-list__icons js-color-linkedin"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    className="card-list__link js-github"
                    target="_blank"
                    aria-label="Github"
                  >
                    <div className="card-list__icon-container js-border-github">
                      <i className="fab fa-github-alt card-list__icons js-color-github"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* Form */}
          <section className="cards-form">
            <form
              className="js-form form-container"
              action=""
              method="POST"
              role="form"
            >
              {/* <!-- DISEÑA ___ revisado team6 --> */}
              <fieldset className="design">
                <div className="js-design-collapsable design__title">
                  <legend className="design__legend">
                    <i className="far fa-object-ungroup design__icon"></i>
                    <h2 className="design__legend--title">Diseña</h2>
                    {/* <!-- <i className="fas fa-chevron-down design__arrow js-arrow-design arrow-up" aria-label="Desplegar"></i> --> */}
                    <img
                      src={menuIcon}
                      alt="Menu"
                      className="js-arrow-design design__arrow arrow-up"
                      aria-label="Desplegar"
                    />
                  </legend>
                </div>
                <div className="js-design colors">
                  <h3 className="colors__title">Colores</h3>
                  <div className="color__palets">
                    <div className="color-palette-1">
                      {/* <!-- <label htmlFor="color-palette-1"></label> --> */}
                      <input
                        className="js-palette-green js-palettes input1"
                        type="radio"
                        id="color-palette-1"
                        name="color"
                        value="color-palette-1"
                        checked
                      />
                      <div className="palette1-1"></div>
                      <div className="palette1-2"></div>
                      <div className="palette1-3"></div>
                    </div>
                    <div className="color-palette-2">
                      {/* <!-- <label htmlFor="color-palette-2"></label> --> */}
                      <input
                        className="js-palette-red js-palettes input2"
                        type="radio"
                        id="color-palette-2"
                        name="color"
                        value="color-palette-2"
                      />
                      <div className="palette2-1"></div>
                      <div className="palette2-2"></div>
                      <div className="palette2-3"></div>
                    </div>
                    <div className="color-palette-3">
                      {/* <!-- <label htmlFor="color-palette-3"></label> --> */}
                      <input
                        className="js-palette-grey js-palettes input3"
                        type="radio"
                        id="color-palette-3"
                        name="color"
                        value="color-palette-3"
                      />
                      <div className="palette3-1"></div>
                      <div className="palette3-2"></div>
                      <div className="palette3-3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* <!-- RELLENA ___ revisado team6 con anotaciones --> */}
              <fieldset>
                <div className="fill">
                  {/* <!-- titulo rellena --> */}
                  <legend className="js-fill-collapsable fill__container">
                    <i className=" fill__icon far fa-keyboard"></i>
                    <h3 className="fill__title">Rellena</h3>
                    {/* <!-- <i className="fill__arrow fas fa-chevron-down js-arrow-fill" aria-label="Desplegar"></i> --> */}
                    <img
                      src={menuIcon}
                      alt="Menu"
                      className="js-arrow-fill fill__arrow arrow-up"
                      aria-label="Desplegar"
                    />
                  </legend>
                  {/* <!-- Fin titulo rellena --> */}
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

                    {/* <!-- team6 - revisar y preguntar sobre la estructura --> */}
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

              {/* <!-- COMPARTE --> */}
              <fieldset className="form-share">
                <div className="js-share-collapsable">
                  <legend className="share-legend">
                    <i className="fas fa-share-alt share-legend__icon--share"></i>
                    <h3 className="share-legend__title">Comparte</h3>
                    {/* <!-- <i className="fas fa-chevron-down share-legend__icon--arrow js-arrow-share" aria-label="Desplegar"></i> --> */}
                    <img
                      src={menuIcon}
                      alt="Menu"
                      className="share-legend__icon--arrow js-arrow-share arrow-up"
                      aria-label="Desplegar"
                    />
                  </legend>
                </div>
                <div className="create-btn js-share hidden">
                  <button
                    type="button"
                    className="create-btn__button js-createButton"
                  >
                    <i className="far fa-address-card create-btn__icon"></i>
                    Crear tarjeta
                  </button>
                </div>
                <div className="success hidden js-success">
                  <p className="success__text js-successText">
                    La tarjeta ha sido creada:
                  </p>
                  <a
                    href=""
                    className="success__link js-createLink"
                    target="_blank"
                  ></a>
                  <a
                    href=""
                    title="Link para compartir en twitter"
                    target="_blank"
                    className="success__link--twitter js-linkTwitter"
                  >
                    <i
                      className="fab fa-twitter success__icon"
                      aria-hidden="true"
                      aria-label="Compartir en Twitter"
                    ></i>
                    Compartir en twitter
                  </a>
                </div>
              </fieldset>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer__copy2020">
            <img
              src={footerLogo}
              className="footer__logofrida"
              alt="Logo Frida Kards"
            />
            <small className="footer__copy">&copy; 2020</small>
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
              className="footer__logo"
              aria-label="Logotipo de Adalab"
            />
          </a>
        </footer>
      </>
    );
  }
}

export default App;
