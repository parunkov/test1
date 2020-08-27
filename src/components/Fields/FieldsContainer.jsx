import Fields from './Fields';
import {connect} from 'react-redux';
import {sendRequest, setRequestFieldValue} from '../../redux/fields-reducer';

const mapStateToProps = (state) => {
	return {
		login: state.login.login,
		sublogin: state.login.sublogin,
		password: state.login.password,
		request: state.fields.request,
		response: state.fields.response,
		fieldFormattedValue: state.fields.fieldFormattedValue,
		requestFieldValue: state.fields.requestFieldValue,
	}
}

export default connect(mapStateToProps, {sendRequest, setRequestFieldValue})(Fields);