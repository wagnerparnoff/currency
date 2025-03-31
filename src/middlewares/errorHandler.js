function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(500).json({ error: "Ocorreu um erro no servidor." });
}

module.exports = { errorHandler };
