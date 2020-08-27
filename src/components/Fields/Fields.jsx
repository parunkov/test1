import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, isJson} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl/FormsControl';
import JSONPretty from 'react-json-pretty';
import {formatTextareaValue} from '../common/commonFunctions';
import './Fields.scss';

const FieldsForm = ({handleSubmit, error, change, response, fieldFormattedValue, requestFieldValue, setRequestFieldValue}) => {
	const setField = (requestFieldValue) => {
		setRequestFieldValue(requestFieldValue);
		if (!isJson(requestFieldValue)) {
			change('request', formatTextareaValue(requestFieldValue));
		}
	}
	const onFieldChange = (evt) => {
		const requestFieldValue = evt.target.value;
		setField(requestFieldValue);
	}
	return (
		<form onSubmit={handleSubmit} className="Fields__textareaWrapper">
			<Field 
				component={Textarea} 
				name={"request"} 
				validate={[required, isJson]} 
				title="Запрос:"
				onChange={(evt) => onFieldChange(evt)} 
			/>
			<div className="Fields__response">{response && 
				<JSONPretty id="json-pretty" data={JSON.stringify(response, 0, 2)}></JSONPretty>}
			</div>
			<div className="">
				<button type={"submit"}>Отправить</button>
				<button type={"button"} onClick={() => setField(requestFieldValue)}>Форматировать</button>
			</div>
		</form>
		)
}

const FieldsReduxForm = reduxForm ({
	form: 'request'
})(FieldsForm);

const Fields = ({login, sublogin, password, request, response, sendRequest, fieldFormattedValue, requestFieldValue, setRequestFieldValue}) => {
	const onSubmit = (formData) => {
		sendRequest(login, sublogin, password, JSON.parse(formData.request), requestFieldValue);
	}

	return(
		<div className="">
			<FieldsReduxForm 
				onSubmit={onSubmit} 
				response={response} 
				fieldFormattedValue={fieldFormattedValue} 
				requestFieldValue={requestFieldValue} 
				setRequestFieldValue={setRequestFieldValue} 
			/>
		</div>
	)
}

export default Fields;