import React from 'react';

const History = ({history}) => {
	console.log(history);
	return(
		<div className="">
			{history.reverse().map((item, i) => <div key={i} className="">{item.title}</div>)}
		</div>
	)
}

export default History;