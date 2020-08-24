import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, emailOrString, stringWithSpace} from '../../utils/validators/validators';
import {Input} from '../common/FormsControl';
import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

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
		var sendsay = new Sendsay({
			auth: {
				login: 'parunkov@gmail.com', 
				password: 'cha3Najiy',     
			}
		});

		sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
			console.log(res);
		})
	}
	return (
		<LoginReduxForm onSubmit={onSubmit} />
		)
}

export default Login;