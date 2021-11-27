const alunos = require("../data/dadosAlunos");

function tratarErros(dados) {
  const { nome, sobrenome, idade, curso } = dados;

  if (!nome) {
    return "O campo 'nome' é obrigatório.";
  }

  if (Number(nome)) {
    return "O campo 'nome' precisa ser um texto.";
  }

  if (!Number(idade)) {
    return "O campo 'idade' precisa ser um número";
  }

  if (!sobrenome) {
    return "O campo 'sobrenome' é obrigatório.";
  }

  if (Number(sobrenome)) {
    return "O campo 'sobrenome' precisa ser um texto.";
  }

  if (!curso) {
    return "O campo 'curso' é obrigatório.";
  }

  if (Number(curso)) {
    return "O campo 'curso' precisa ser um texto.";
  }

  if (idade < 18) {
    return "Idade não permitida";
  }
}

let id = 0;

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
  const { nome, sobrenome, idade, curso } = req.body, erro = tratarErros(req.body);
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