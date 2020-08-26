import React, {useState} from 'react';
import './History.scss';

const HistoryItem = ({item}) => {

	const [popup, setPopup] = useState(false);

	return(
		<span className="History__item">
			<span className={item.isError ? "History__error History__error_enabled" : "History__error"}></span>
			<span className="History__title">{item.title}</span>
			<button className="History__button" onClick={() => setPopup(!popup)}>...</button>
			{popup && <div>
				<div className="">Выполнить</div>
				<div className="">Скопировать</div>
				<div className="">Удалить</div>
				</div>}
		</span>
	)
}

const History = ({history}) => {
	return(
		<div className="">
			{[...history].reverse().map((item, i) => <HistoryItem key={i} className="" item={item} />)}
		</div>
	)
}

export default History;