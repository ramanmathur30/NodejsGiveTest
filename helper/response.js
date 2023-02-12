const response = (data, message = "success",status) => {

	return {
		status:status,
		data: data,
		message: message
	};

};

module.exports = response;