import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, emailOrString, stringWithSpace} from '../../utils/validators/validators';
import {Input} from '../common/FormsControl';

const LoginForm = ({handleSubmit, error, loginError}) => {
	return (
		<form onSubmit={handleSubmit} className="">
		<h1>API-консолька</h1>
		<Field component={Input} name={"login"} validate={[required, emailOrString]} title="Логин" />
		<Field component={Input} name={"sublogin"} title="Сублогин"/>
		<Field component={Input} name={"password"} validate={[required, stringWithSpace]} type={"password"} title="Пароль" />
		{loginError && <div>Вход не вышел {loginError}</div>}
		<div className="">
			<button type={"submit"}>Войти</button>
		</div>
		</form>
		)
}

const LoginReduxForm = reduxForm ({
	form: 'login'
})(LoginForm);

const Login = ({checkLogin, error}) => {
	console.log(error);
	const onSubmit = (formData) => {
		checkLogin(formData.login, formData.sublogin, formData.password);
	}
	return (
		<LoginReduxForm onSubmit={onSubmit} loginError={error} />
		)
}

export default Login;