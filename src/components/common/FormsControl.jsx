import React from 'react';
import styles from './FormsControl.module.scss';

const FormsControl = ({input, meta: {touched, error}, ...props}) => {
	const hasError = touched && error;
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
			{props.children}
		</div>
	)
}

export const Input = (props) => {
	const {input, meta, ...restProps} = props;
	// debugger;
	return (
		<FormsControl {...props}>
			<div className="">{props.title}</div>
			<input {...input} {...restProps} />
		</FormsControl>
	)
}
export const Textarea = (props) => {
	const {input, meta, setValidationError, ...restProps} = props;
	// console.log(restProps);
	// debugger;
	return (
		<FormsControl {...props}>
			<div className="">{props.title}</div>
			<textarea {...input} {...restProps} />
		</FormsControl>
	)
}
