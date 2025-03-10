const express = require("express");
const router = express.Router();
const { convertCurrency } = require("../services/exchangeService");

router.get("/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res
      .status(400)
      .json({ error: "Os parâmetros from, to e amount são obrigatórios." });
  }

  try {
    const result = await convertCurrency(from, to, amount);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao converter moedas." });
  }
});

module.exports = router;
