function tratarErrosCadastro(dados) {
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

function tratarErrosId(id) {
  if (!Number(id)) {
    return "Parâmetro 'ID' incorreto."
  }
}

module.exports = {
  tratarErrosCadastro,
  tratarErrosId,
}