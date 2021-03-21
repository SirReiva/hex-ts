const swaggerJsdoc = require('swagger-jsdoc');
const { writeFileSync } = require('fs');
const { resolve } = require('path');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Hello World',
			version: '1.0.0',
		},
	},
	apis: ['./src/**/*.controller.ts'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

writeFileSync(
	resolve(__dirname, './src/swagger.json'),
	JSON.stringify(openapiSpecification, null, 4)
);
