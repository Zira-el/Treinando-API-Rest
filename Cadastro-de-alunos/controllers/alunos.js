const alunos = require("../data/dadosAlunos");

function retornarAlunos(req, res) {
  res.status(200).json(alunos);
}

function retornarUmAluno(req, res) {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json("O parâmetro ID está incorreto.");
  }

  const alunoExiste = alunos.find(aluno => aluno.id === id);

  if (!alunoExiste) {
    return res.status(404).json("Aluno não encontrado!");
  }

  res.status(200).json(alunoExiste);
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