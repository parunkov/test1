import Fields from './Fields';
import {connect} from 'react-redux';
import {sendRequest, setValues} from '../../redux/fields-reducer';

const mapStateToProps = (state) => {
	return {
		login: state.login.login,
		sublogin: state.login.sublogin,
		password: state.login.password,
		request: state.fields.request,
		response: state.fields.response,
		fieldFormattedValue: state.fields.fieldFormattedValue,
		fieldValue: state.fields.fieldValue
	}
}

export default connect(mapStateToProps, {sendRequest, setValues})(Fields);