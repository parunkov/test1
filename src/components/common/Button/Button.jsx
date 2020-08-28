import React from 'react';
import './Button.scss';

const Button = (props) => {
	let buttonClassName = 'button';
	if (props.modifiers) {
		props.modifiers.forEach((item) => {
			buttonClassName = item === 'themeLight' ? buttonClassName + ' button_theme_light' : buttonClassName;
			buttonClassName = item === 'stateWaitig' ? buttonClassName + ' button_state_waiting' : buttonClassName;
		});
	}
	return(
		<button type={props.type} className={buttonClassName}>{props.text}</button>
	)
}

export default Button;