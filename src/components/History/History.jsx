import React, {useState} from 'react';
import './History.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const HistoryItem = ({item, deleleHistoryItem, change, sendRequest, login, sublogin, password}) => {
	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

	return(
		<span className="History__item" onMouseDown={() => {
			change('request', 'request', item.value);
		}}>
			<span className={item.isError ? "History__error History__error_enabled" : "History__error"}></span>
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

const History = ({history, change, deleleHistoryItem, sendRequest, login, sublogin, password}) => {
	return(
		<div className="">
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
		</div>
	)
}

export default History;