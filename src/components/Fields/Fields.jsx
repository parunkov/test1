import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {reduxForm, Field} from 'redux-form';
import {required, isJson} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl';
import JSONPretty from 'react-json-pretty';
import './Fields.scss';
import ContentEditable from 'react-contenteditable'

const FieldsForm = ({handleSubmit, error, change, response, fieldFormattedValue, fieldValue, setValues}) => {
	const onFieldChange = (evt) => {
		const fieldFormattedValue = evt.target.value;
		// console.log(typeof fieldFormattedValue);
		const fieldValue = fieldFormattedValue.replace(/<\/?[a-zA-Z]+>/gi,'').replace(/&nbsp;/gi, '');
		setValues(fieldFormattedValue, fieldValue);
		change('request', fieldValue);
	}
	const onFormat = () => {
		// console.log(fieldValue);
		const formattedValueElement = <JSONPretty id="json-pretty" data={fieldValue}></JSONPretty>
		const formattedValue = ReactDOMServer.renderToString(formattedValueElement);
		// console.log(formattedValue);
		// console.log(typeof ReactDOMServer.renderToString(formattedValue));
		setValues(formattedValue, fieldValue);
		change('request', fieldValue);
	}
	return (
		<form onSubmit={handleSubmit} className="Fields__textareaWrapper">
			<Field component={Textarea} name={"request"} validate={[required, isJson]} title="Запрос:" />
			<ContentEditable className="Fields__field" onChange={(evt) => onFieldChange(evt)} html={fieldFormattedValue} />
			<div className="Fields__response">{response && 
				<JSONPretty id="json-pretty" data={JSON.stringify(response, 0, 2)}></JSONPretty>}
			</div>
			<div className="">
				<button type={"submit"}>Отправить</button>
				<button type={"button"} onClick={() => onFormat()}>Форматировать</button>
			</div>
		</form>
		)
}

const FieldsReduxForm = reduxForm ({
	form: 'request'
})(FieldsForm);

const Fields = ({login, sublogin, password, request, response, sendRequest, fieldFormattedValue, fieldValue, setValues}) => {
	const onSubmit = (formData) => {
		sendRequest(login, sublogin, password, JSON.parse(formData.request));
	}

	return(
		<div className="">
			<FieldsReduxForm onSubmit={onSubmit} response={response} fieldFormattedValue={fieldFormattedValue} fieldValue={fieldValue} setValues={setValues} />
		</div>
	)
}

export default Fields;