import React, {useState} from 'react';
import './History.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import JSONPretty from 'react-json-pretty';
import ReactDOMServer from 'react-dom/server';
import {formatTextareaValue} from '../common/commonFunctions';

const HistoryItem = ({item, deleleHistoryItem, change, sendRequest, login, sublogin, password}) => {
	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

	const onMouseDown = () => {
		const formattedValueElement = <JSONPretty id="json-pretty" data={item.value}></JSONPretty>
		const formattedValue = ReactDOMServer.renderToString(formattedValueElement);
		const fieldValue = formattedValue.replace(/<[^<>]+>/gi,'').replace(/&nbsp;/gi, '');
		change('request', 'request', fieldValue);
	}

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