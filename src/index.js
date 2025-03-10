const express = require("express");
const cors = require("cors"); // Importa o pacote CORS
const dotenv = require("dotenv");
const converterRoutes = require("./routes/converter");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", converterRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
