const mongooose = require('mongoose');
module.exports = async function (key) {
	try {
		const conn = await mongooose.connect(key, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`Database Connected (${conn.connection.name}): ${conn.connection.host}`);
	} catch (e) {
		console.log(e);
	}
};
