export default {
	API_ENDPOINT: `https://pacific-mountain-23937.herokuapp.com`,
	API_KEY: process.env.REACT_APP_API_KEY,
	DATABASE_URL:
		process.env.DATABASE_URL || 'postgresql://postgres:wetbeverage@localhost/noteful',
	TEST_DATABASE_URL:
		process.env.DATABASE_URL ||
		'postgresql://postgres:wetbeverage@localhost/noteful-test',
};
t