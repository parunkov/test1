import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit} className="">
			<h1>API-консолька</h1>
			<div className="">Логин</div>
			<Field component={"input"} name={"login"} />
			<div className="">Сублогин</div>
			<Field component={"input"} name={"sublogin"} />
			<div className="">Пароль</div>
			<Field component={"input"} name={"password"} type={"password"} />
			<div className="">
				<button type={"submit"}>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm ({
	form: 'login'
})(LoginForm);

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return (
		<LoginReduxForm onSubmit={onSubmit} />
	)
}

export default Login;