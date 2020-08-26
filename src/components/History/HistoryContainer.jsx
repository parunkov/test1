import History from './History';
import {connect} from 'react-redux';
import {deleleHistoryItem} from '../../redux/history-reducer';
import {change} from 'redux-form';
import {sendRequest} from '../../redux/fields-reducer';

const mapStateToProps = (state) => {
	return {
		login: state.login.login,
		sublogin: state.login.sublogin,
		password: state.login.password,
		history: state.history.history
	}
}

export default connect(mapStateToProps, {deleleHistoryItem, change, sendRequest})(History);