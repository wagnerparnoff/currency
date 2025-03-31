const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const converterRoutes = require("./routes/converter");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const { requestLogger } = require("./middlewares/requestLogger");
const { validateEnv } = require("./utils/validateEnv");
const { errorHandler } = require("./middlewares/errorHandler");

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use("/api", converterRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
