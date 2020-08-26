import History from './History';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		history: state.history.history
	}
}

export default connect(mapStateToProps, {})(History);