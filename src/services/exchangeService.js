const axios = require("axios");

async function convertCurrency(from, to, amount) {
  const apiKey = process.env.EXCHANGE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

  try {
    const response = await axios.get(url);
    const rates = response.data.conversion_rates;
    const rate = rates[to];

    if (!rate) throw new Error("Moeda inválida.");

    const convertedAmount = (amount * rate).toFixed(2);
    return { from, to, amount, convertedAmount, rate };
  } catch (error) {
    throw new Error("Erro ao buscar taxas de câmbio.");
  }
}

module.exports = { convertCurrency };
