import History from './History';
import {connect} from 'react-redux';
import {deleleHistoryItem} from '../../redux/history-reducer';

const mapStateToProps = (state) => {
	return {
		history: state.history.history
	}
}

export default connect(mapStateToProps, {deleleHistoryItem})(History);