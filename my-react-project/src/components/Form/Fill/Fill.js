/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import FormMenu from '../FormMenu/FormMenu';
import Input from './Input/Input';
import InputImage from './InputImage/InputImage';
import './Fill.scss';

class Fill extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<fieldset>
				<div className="fill">
					<FormMenu
						fieldsetName="fill"
						fieldsetTitle="Rellena"
						fieldsetIcon="far fa-keyboard"
					/>
					<div className="js-fill">
						<Input
							inputName="name"
							inputLabel="Nombre completo"
							inputType="text"
							inputPlaceholder="Frida Kahlo"
						/>
						<Input
							inputName="job"
							inputLabel="Puesto"
							inputType="text"
							inputPlaceholder="Pintora"
						/>

						<InputImage />

						<Input
							inputName="email"
							inputLabel="Email"
							inputType="email"
							inputPlaceholder="frida.Kahlo@gmail.com"
						/>
						<Input
							inputName="phone"
							inputLabel="Teléfono"
							inputType="tel"
							inputPlaceholder="666 555 444"
						/>
						<Input
							inputName="linkedin"
							inputLabel="LinkedIn"
							inputType="text"
							inputPlaceholder="linkedin.com/in/frida-kahlo"
						/>
						<Input
							inputName="github"
							inputLabel="GitHub"
							inputType="text"
							inputPlaceholder="frida-kahlo"
						/>
					</div>
				</div>
			</fieldset>
		);
	}
}

export default Fill;
