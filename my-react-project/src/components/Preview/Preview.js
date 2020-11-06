/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <h2 className="card-head__subtitle js-job">Front-end developer</h2>
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
    );
  }
}

export default Preview;
