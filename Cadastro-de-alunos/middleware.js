function travaDeSenha(req, res, next) {
  if (req.query.senha === "123456") {
    next();
  } else {
    res.status(401).json({ erro: "Acesso não autorizado!" });
  }
}

module.exports = {
  travaDeSenha,
};