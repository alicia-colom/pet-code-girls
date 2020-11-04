import React, { Component } from "react";
import menuIcon from "../../../images/fridacolor.png";
import "./Share.scss";

class Share extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="form-share">
        <div className="js-share-collapsable">
          <legend className="share-legend">
            <i className="fas fa-share-alt share-legend__icon--share"></i>
            <h3 className="share-legend__title">Comparte</h3>
            <img
              src={menuIcon}
              alt="Menu"
              className="share-legend__icon--arrow js-arrow-share arrow-up"
              aria-label="Desplegar"
            />
          </legend>
        </div>
        <div className="create-btn js-share hidden">
          <button type="button" className="create-btn__button js-createButton">
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
    );
  }
}

export default Share;
