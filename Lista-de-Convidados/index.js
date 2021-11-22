const express = require("express");

const app = express();

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
  res.json(convidados);
})

app.listen(8001);

