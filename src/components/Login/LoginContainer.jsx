import Login from './Login';
import {connect} from 'react-redux';
import {checkLogin} from '../../redux/login-reducer';

const mapStateToProps = (state) => {
	return {
		isLogined: state.login.isLogined,
		error: state.login.error
	}
}

export default connect(mapStateToProps, {checkLogin})(Login);