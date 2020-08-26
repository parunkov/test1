import React from 'react';
import './History.scss';

const HistoryItem = ({item}) => {
	return(
		<span className="History__item">
			<span className={item.isError ? "History__error History__error_enabled" : "History__error"}></span>
			<span className="History__title">{item.title}</span>
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