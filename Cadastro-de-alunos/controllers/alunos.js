const alunos = require("../data/dadosAlunos");

function tratarErros(dados) {
  const { nome, sobrenome, idade, curso } = dados;

  if (!nome) {
    return res.status(400).json("O campo 'nome' é obrigatório.");
  }

  if (Number(nome)) {
    return res.status(400).json("O campo 'nome' precisa ser um texto.");
  }

  if (!Number(idade)) {
    return res.status(400).json("O campo 'idade' precisa ser um número");
  }

  if (!sobrenome) {
    return res.status(400).json("O campo 'sobrenome' é obrigatório.");
  }

  if (Number(sobrenome)) {
    return res.status(400).json("O campo 'sobrenome' precisa ser um texto.");
  }

  if (!curso) {
    return res.status(400).json("O campo 'curso' é obrigatório.");
  }

  if (Number(curso)) {
    return res.status(400).json("O campo 'curso' precisa ser um texto.");
  }

  if (idade < 18) {
    return res.status(400).json("Idade não permitida");
  }
}

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
  const { nome, sobrenome, idade, curso } = req.body;
  let id = 0, dados = {};
  tratarErros(req.body);

  dados = {
    id: id++,
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