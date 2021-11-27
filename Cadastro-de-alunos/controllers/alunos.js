const alunos = require("../data/dadosAlunos");
const { tratarErrosCadastro, tratarErrosId } = require("../utils/erros");

let id = 0;

function encontrarAluno(id) {
  const erro = tratarErrosId(id);

  if (erro) {
    return "erro id";
  }

  const alunoExiste = alunos.find(aluno => aluno.id === Number(id));

  return alunoExiste;
}

function retornarAlunos(req, res) {
  res.status(200).json(alunos);
}

function retornarUmAluno(req, res) {
  const alunoExiste = encontrarAluno(req.params.id);

  if (alunoExiste === "erro id") {
    return res.status(404).json("Parâmetro 'ID' incorreto.");
  }

  if (!alunoExiste) {
    return res.status(404).json("Aluno informado não existe.");
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
  const alunoExiste = encontrarAluno(req.params.id);

  if (alunoExiste === "erro id") {
    return res.status(404).json("Parâmetro 'ID' incorreto.");
  }

  if (!alunoExiste) {
    return res.status(404).json("Aluno informado não existe.");
  }

  const index = alunos.indexOf(alunoExiste);

  alunos.splice(index, 1);

  res.status(200).json("Aluno deletado com sucesso.");
}

module.exports = {
  retornarAlunos,
  retornarUmAluno,
  adicionarAluno,
  deletarAluno,
}