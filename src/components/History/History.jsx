import React, {useState, useEffect, useRef} from 'react';
import './History.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {formatTextareaValue} from '../common/commonFunctions';

const HistoryItem = ({item, deleleHistoryItem, change, sendRequest, login, sublogin, password}) => {
	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

	return(
		<span className="history__item" onMouseDown={() => {
			change('request', 'request', formatTextareaValue(item.value));
		}}>
			<span className={item.isError ? "history__status history__status_theme_error" : "history__status"}></span>
			<span className="history__title">{copied ? "Скопировано" : item.title}</span>
			<button className="history__item-button" onClick={() => setPopup(!popup)}>...</button>
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



	const useHorizontalScroll = () => {
		const elRef = useRef();
		useEffect(() => {
			const el = elRef.current;
			if (el) {
				const onWheel = e => {
					e.preventDefault();
					el.scrollTo({
						left: el.scrollLeft + e.deltaY,
						behavior: "smooth"
					});
				};
				el.addEventListener("wheel", onWheel);
				return () => el.removeEventListener("wheel", onWheel);
			}
		}, []);
		return elRef;
	}

	const scrollRef = useHorizontalScroll();

	return(
		<div className="history">
			<div className="history__container" ref={scrollRef}>
				{/*<div className="history__items" style={{ whiteSpace: "nowrap" }}>*/}
				<div className="history__items">
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
			</div>
			<span className="history__button">
				<button onClick={() => setSavedHistory([])}>Clear history</button>
			</span>
		</div>
	)
}

export default History;