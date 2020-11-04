import React, { Component } from "react";
import "./Form.scss";
import Design from "./Design/Design";
import Fill from "./Fill/Fill";
import Share from "./Share/Share";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cards-form">
        <form
          className="js-form form-container"
          action=""
          method="POST"
          role="form"
        >
          <Design />
          <Fill />
          <Share />
        </form>
      </section>
    );
  }
}

export default Form;
