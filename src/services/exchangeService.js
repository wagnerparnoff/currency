const axios = require("axios");
const cache = require("../config/cache");

async function convertCurrency(from, to, amount) {
  const cacheKey = `${from}_${to}`;
  const cachedRate = cache.get(cacheKey);

  if (cachedRate) {
    const convertedAmount = (amount * cachedRate).toFixed(2);
    return { from, to, amount, convertedAmount, rate: cachedRate };
  }

  const apiKey = process.env.EXCHANGE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

  const response = await axios.get(url);
  const rate = response.data.conversion_rates[to];

  if (!rate) throw new Error("Moeda inválida.");

  cache.set(cacheKey, rate);
  const convertedAmount = (amount * rate).toFixed(2);
  return { from, to, amount, convertedAmount, rate };
}

module.exports = { convertCurrency };
