'use strict';
const Builder = require('./js/src/Builder.js');
module.exports.hello = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello World',
		}, null, 2),
	};
};
module.exports.generate = async (event) => {
	const pattern = event["queryStringParameters"]['q'];
	const b = new Builder(pattern);
	const response = b.getResponse();
	return {
		statusCode: 200,
		body: JSON.stringify(response, null, 2),
	};
};