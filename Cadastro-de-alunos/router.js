const express = require("express");
const alunos = require("./controllers/alunos");

const router = express();

router.get("/alunos", alunos.retornarAlunos);
router.get("/alunos/:id", alunos.retornarUmAluno);
router.post("/alunos", alunos.adicionarAluno);
router.delete("/alunos/:id", alunos.deletarAluno);

module.exports = router;