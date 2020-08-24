import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, emailOrString, stringWithSpace} from '../../utils/validators/validators';
import {Input} from '../common/FormsControl';

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className="">
			<h1>API-консолька</h1>
			<Field component={Input} name={"login"} validate={[required, emailOrString]} title="Логин" />
			<Field component={Input} name={"sublogin"} title="Сублогин"/>
			<Field component={Input} name={"password"} validate={[required, stringWithSpace]} type={"password"} title="Пароль" />
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