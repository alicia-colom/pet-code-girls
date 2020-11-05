import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form">
				<label htmlFor={this.props.inputName}>{this.props.inputLabel}</label>
				<input
					className="js-input form__inp"
					type={this.props.inputType}
					id={this.props.inputName}
					name={this.props.inputName}
					placeholder={this.props.inputPlaceholder}
					required
				/>
			</div>
		);
	}
}

export default Input;
