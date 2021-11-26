const alunos = require("../data/dadosAlunos");

function retornarAlunos(req, res) {
  res.status(200).json(alunos);
}

function retornarUmAluno(req, res) {

}

function adicionarAluno(req, res) {

}

function deletarAluno(req, res) {

}

module.exports = {
  retornarAlunos,
  retornarUmAluno,
  adicionarAluno,
  deletarAluno,
}