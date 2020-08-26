import React from 'react';
import {handle} from '../Console/Console';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Header = ({login, sublogin, logout}) => {
	const onBtnClick = () => {
		localStorage.setItem('loginData', JSON.stringify({isLogined: false, login: null, sublogin: null, password: null}));
		logout();
	}
	return (
		<div className="">
			<h1>API-консолька</h1>
			<div className="">{login}</div>
			<div className="">{sublogin}</div>
			<button className="" onClick={onBtnClick}>Выйти</button>
		</div>
	)
}

export default Header;