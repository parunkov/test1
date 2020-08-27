import React, {useState, useEffect} from 'react';
import './History.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {formatTextareaValue} from '../common/commonFunctions';

const HistoryItem = ({item, deleleHistoryItem, change, sendRequest, login, sublogin, password}) => {
	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

	return(
		<span className="History__item" onMouseDown={() => {
			change('request', 'request', formatTextareaValue(item.value));
		}}>
			<span className={item.isError ? "History__status History__status_theme_error" : "History__status"}></span>
			<span className="History__title">{copied ? "Скопировано" : item.title}</span>
			<button className="History__button" onClick={() => setPopup(!popup)}>...</button>
			{popup && <div>
				<div className="" onClick={() => {
					sendRequest(login, sublogin, password, JSON.parse(item.value), item.value);
					setPopup(false);
				}}>Выполнить</div>
				<CopyToClipboard text={item.value} onCopy={() => {
					setCopied(true);
					setPopup(false);
					setTimeout(setCopied, 2000, false);
				}}>
					<div className="">Скопировать</div>
				</CopyToClipboard>				
				<div className="" onClick={() => {
					deleleHistoryItem(item.title);
					setPopup(false);
				}}>Удалить</div>
				</div>}
		</span>
	)
}

const History = ({history, change, deleleHistoryItem, sendRequest, login, sublogin, password, setSavedHistory}) => {
	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	return(
		<div className="">
			<div className="">
				<span>
					{[...history].reverse().map((item, i) => <HistoryItem 
						key={i} 
						className="" 
						item={item} 
						deleleHistoryItem={deleleHistoryItem}
						change={change}
						sendRequest={sendRequest}
						login={login}
						sublogin={sublogin}
						password={password} />)}
				</span>
				<button onClick={() => setSavedHistory([])}>Clear history</button>
			</div>
		</div>
	)
}

export default History;