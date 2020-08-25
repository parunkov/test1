import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, isJson} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl';
import JSONPretty from 'react-json-pretty';
import './Fields.scss';
import ContentEditable from 'react-contenteditable'

const FieldsForm = ({handleSubmit, error, response}) => {
	
	return (
		<form onSubmit={handleSubmit} className="Fields__textareaWrapper">
			<Field component={Textarea} name={"request"} validate={[required, isJson]} title="Запрос:" />
			<div className="Fields__textareaLabel" contentEditable={true} onKeyDown={() => console.log(this)}></div>
			<ContentEditable onChange={(evt) => console.log(evt.target.value.replace(/<\/?[a-zA-Z]+>/gi,'').replace(/&nbsp;/gi, ''))}/>;
			<div className="Fields__response">{response && 
				<JSONPretty id="json-pretty" data={JSON.stringify(response, 0, 2)}></JSONPretty>}
			</div>
			<div className="">
				<button type={"submit"}>Отправить</button>
				<button type={"button"}>Форматировать</button>
			</div>
		</form>
		)
}

const FieldsReduxForm = reduxForm ({
	form: 'request'
})(FieldsForm);

const Fields = ({login, sublogin, password, request, response, sendRequest}) => {
	const onSubmit = (formData) => {
		sendRequest(login, sublogin, password, JSON.parse(formData.request));
	}

	return(
		<div className="">
			<FieldsReduxForm onSubmit={onSubmit} response={response} />
		</div>
	)
}

export default Fields;