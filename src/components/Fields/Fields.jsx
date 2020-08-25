import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl';
import JSONPretty from 'react-json-pretty';
import './Fields.scss';

const FieldsForm = ({handleSubmit, error, response}) => {
	console.log(JSON.stringify(response, 0, 2));
	return (
		<form onSubmit={handleSubmit} className="">
			<Field component={Textarea} name={"request"} validate={[required]} title="Запрос:" />
			<div className="Fields__response">{response && 
				<JSONPretty id="json-pretty" data={JSON.stringify(response, 0, 2)}></JSONPretty>}
			</div>
			<div className="">
				<button type={"submit"}>Отправить</button>
			</div>
		</form>
		)
}

const FieldsReduxForm = reduxForm ({
	form: 'request'
})(FieldsForm);

const Fields = ({login, sublogin, password, request, response, sendRequest}) => {
	// console.log(props);
	const onSubmit = (formData) => {
		console.log(formData);
		sendRequest(login, sublogin, password, JSON.parse(formData.request));
	}

	return(
		<div className="">
			<FieldsReduxForm onSubmit={onSubmit} response={response} />
		</div>
	)
}

export default Fields;