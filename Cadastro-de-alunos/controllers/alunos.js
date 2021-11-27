const alunos = require("../data/dadosAlunos");
const { tratarErrosCadastro, tratarErrosId } = require("../utils/erros");

let id = 0;

function retornarAlunos(req, res) {
  res.status(200).json(alunos);
}

function retornarUmAluno(req, res) {
  const id = Number(req.params.id);
  const erro = tratarErrosId(id);

  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const alunoExiste = alunos.find(aluno => aluno.id === id);

  if (!alunoExiste) {
    return res.status(404).json("Aluno não encontrado!");
  }

  res.status(200).json(alunoExiste);
}

function adicionarAluno(req, res) {
  const { nome, sobrenome, idade, curso } = req.body, erro = tratarErrosCadastro(req.body);
  let dados = {};

  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  dados = {
    id: ++id,
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    curso: curso
  }

  alunos.push(dados);
  res.status(201).json("Cadastro efetuado com sucesso!");
}

function deletarAluno(req, res) {

}

module.exports = {
  retornarAlunos,
  retornarUmAluno,
  adicionarAluno,
  deletarAluno,
}