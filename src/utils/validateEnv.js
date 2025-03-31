function validateEnv() {
  if (!process.env.EXCHANGE_API_KEY) {
    throw new Error(
      "A variável EXCHANGE_API_KEY é obrigatória no arquivo .env."
    );
  }
}

module.exports = { validateEnv };
