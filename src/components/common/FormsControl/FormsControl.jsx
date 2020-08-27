import React from 'react';
import styles from './FormsControl.scss';

const FormsControl = ({input, meta: {touched, error}, ...props}) => {
	const hasError = touched && error;
	return (
		<div className={"form-control" + (hasError ? " form-control_theme_error" : '')}>
			{props.children}
		</div>
	)
}

export const Input = (props) => {
	const {input, meta, ...restProps} = props;
	return (
		<FormsControl {...props}>
			<div className="form-control__title">{props.title}</div>
			{props.subtitle && <div className="form-control__subtitle">{props.subtitle}</div>}
			<input className={"form-control__input" + (props.password ? " form-control__input_type_password" : "")} {...input} {...restProps} />
		</FormsControl>
	)
}
export const Textarea = (props) => {
	const {input, meta, setValidationError, ...restProps} = props;
	return (
		<FormsControl {...props}>
			<div className="form-control__title">{props.title}</div>
			<textarea className="form-control__textarea" {...input} {...restProps} />
		</FormsControl>
	)
}
