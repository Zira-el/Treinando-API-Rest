const express = require("express");
const router = require("./router");
const { travaDeSenha } = require("./middleware");

const app = express();
app.use(express.json());
app.use(travaDeSenha);
app.use(router);

app.listen(8001);