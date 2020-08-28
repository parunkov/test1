import React from 'react';
import './Button.scss';

const Button = (props) => {
	let buttonClassName = 'button';
	if (props.modifiers) {
		props.modifiers.forEach((item) => {
			buttonClassName = item === 'themeLight' ? buttonClassName + ' button_theme_light' : buttonClassName;
			buttonClassName = item === 'stateWaitig' ? buttonClassName + ' button_state_waiting' : buttonClassName;
			buttonClassName = item === 'themeFullscreen' ? buttonClassName + ' button_theme_fullscreen' : buttonClassName;
			buttonClassName = item === 'themeExitFullscreen' ? buttonClassName + ' button_theme_exit-fullscreen' : buttonClassName;
		});
	}
	return(
		<button type={props.type} className={buttonClassName} onClick={props.onClick}>{props.text}</button>
	)
}

export default Button;