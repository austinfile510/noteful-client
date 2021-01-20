export default {
	API_ENDPOINT: `http://localhost:8000/api`,
	API_KEY: process.env.REACT_APP_API_KEY,
	DB_URL:
		process.env.DB_URL || 'postgresql://postgres:wetbeverage@localhost/noteful',
	TEST_DB_URL:
		process.env.DB_URL ||
		'postgresql://postgres:wetbeverage@localhost/noteful-test',
};
