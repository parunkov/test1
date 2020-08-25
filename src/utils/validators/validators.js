export const required = value => {
	if (value) return undefined;
	console.log('Field is required');
	return 'Field is required';
}
export const emailOrString = value => {
	// eslint-disable-next-line
	if(value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) || (/^[a-zA-Z0-9_]+$/).test(value)) return undefined;
	console.log('E-mail or string');
	return 'E-mail or string';
}
export const stringWithSpace = value => {
	if ((/^[a-zA-Z0-9_ ]+$/).test(value)) return undefined;
	console.log('String');
	return 'String';
}
export const isJson = value => {
	try {
		const request = JSON.parse(value);
		return undefined;
	} catch (err) {
		console.log(err);
		return err;			
	}
}