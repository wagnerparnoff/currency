const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Currency Converter API",
      version: "1.0.0",
      description: "API para conversão de moedas",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsDoc(options);
